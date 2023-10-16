import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import bg10 from "../../../Image/background11.png";
import fontSize from "../../../utils/constant/fontSize";
import Vi from "../../../utils/language/vi";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../../utils/constant/namePage";
import { useSelector } from "react-redux";
import keyMap from "../../../utils/constant/keyMap";
import moment from "moment"
import { pushPorductToCartService } from "../../../service/appService";

const ModalProduct = ({ isVisible, title, onClose, handle, product }) => {
  const language = useSelector(state => state.app.language)
  const isLogin = useSelector(state => state.app.isLogin)
  const navigation = useNavigation();
  const [typeSelected, setTypeSelected] = useState("");
  const [quantityOfType, setQuantityOfType] = useState(null)
  const idTypeSelected = useRef()

  const handleSelected = (item) => {
    setTypeSelected(item.type + item.size);
    setQuantityOfType(item.quantity)
    idTypeSelected.current = item.id
  };
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyProduct = async () => {
    if (!isLogin) {
      return alert(language === keyMap.EN ? 'You are not logged in' : "Bạn chưa đăng nhập")
    }
    if (quantity <= 0) {
      return alert(language === keyMap.EN ? "Please select product quantity" : "Vui lòng chọn số lượng sản phẩm")
    }
    if (!idTypeSelected.current) {
      return alert(language === keyMap.EN ? "Please select product type" : "Vui lòng chọn loại sản phẩm")
    }
    if (title === "Them ngay") {
      let response = await pushPorductToCartService({
        productId: product.id,
        productTypeId: idTypeSelected.current,
        quantity: quantity,
        supplierId: product.supplierId,
        statusId: keyMap.TRONGGIO,
        totalPaid: product.price,
        time: moment().format('DD/MM/YYYY')
      })

      if (response && response.errCode === 0) {
        navigation.navigate(namePage.CART);
      } else {
        alert(language === keyMap.EN ? response.messageEN : response.messageVI)
      }

    }


  };

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View style={styles.contentTop}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <View>
              <Image source={bg10} style={{ width: 100, height: 100 }} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: fontSize.h2 }}>{product.price}Đ</Text>
              <Text style={{ color: "#ff7337", fontSize: fontSize.h2 }}>
                Kho: {quantityOfType}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handle} style={styles.content}>
            <AntDesign name="close" size={24} color="#ff7337" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentCenter}>
          <View>
            <Text style={{ fontSize: fontSize.h2 }}>Màu Sắc</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            {
              product.productTypeData && product.productTypeData?.map(item => {
                return (
                  <TouchableOpacity
                    key={item.type + item.size}
                    style={[
                      styles.itemOption,
                      typeSelected === item.type + item.size ? styles.typeSelected : null,
                    ]}
                    onPress={() => handleSelected(item)}
                  >
                    {/* <Image style={{ width: 25, height: 25 }} source={bg10} /> */}
                    <Text>{item.type + "-size: " + item.size}</Text>
                  </TouchableOpacity>
                )
              })
            }

          </View>
        </View>



        <View style={styles.contentBottom}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: fontSize.h2 }}>Số lượng</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Button title="-" onPress={decreaseQuantity} />
              <Text style={{ paddingHorizontal: 20 }}>{quantity}</Text>
              <Button title="+" onPress={increaseQuantity} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buyProduct}
            onPress={handleBuyProduct}
          >
            <Text style={{ textAlign: "center", color: "#ffffff" }}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProduct;

const styles = StyleSheet.create({
  itemOption: {
    width: "30.33%",
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#f0f1f6",
    borderRadius: 5,
    padding: 4,
    justifyContent: "space-around",
    alignItems: "center",
  },
  typeSelected: {
    borderWidth: 1,
    borderColor: "#ff7337",
  },
  contentCenter: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  contentTop: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  contentBottom: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  content: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ff7337",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buyProduct: {
    marginTop: 10,
    backgroundColor: "#ff7337",
    paddingVertical: 10,
    borderRadius: 5,
  },
});
