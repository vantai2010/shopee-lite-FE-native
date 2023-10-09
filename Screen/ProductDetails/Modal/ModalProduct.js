import React, { useState } from "react";
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

const ModalProduct = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const handleSelected = (type) => {
    setSelected(type);
  };
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyProduct = () => {
    navigation.navigate(namePage.PAY);
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
              <Text style={{ fontSize: fontSize.h2 }}>120.000Đ</Text>
              <Text style={{ color: "#ff7337", fontSize: fontSize.h2 }}>
                Kho: 1120
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.content}>
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
            <TouchableOpacity
              style={[
                styles.itemOption,
                selected === "Màu vàng" ? styles.selected : null,
              ]}
              onPress={() => handleSelected("Màu vàng")}
            >
              <Image style={{ width: 25, height: 25 }} source={bg10} />
              <Text>Màu vàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemOption,
                selected === "Màu xanh" ? styles.selected : null,
              ]}
              onPress={() => handleSelected("Màu xanh")}
            >
              <Image style={{ width: 25, height: 25 }} source={bg10} />
              <Text>Màu xanh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemOption,
                selected === "Màu đỏ" ? styles.selected : null,
              ]}
              onPress={() => handleSelected("Màu đỏ")}
            >
              <Image style={{ width: 25, height: 25 }} source={bg10} />
              <Text>Màu đỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemOption,
                selected === "Màu hồng" ? styles.selected : null,
              ]}
              onPress={() => handleSelected("Màu hồng")}
            >
              <Image style={{ width: 25, height: 25 }} source={bg10} />
              <Text>Màu hồng</Text>
            </TouchableOpacity>
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
              Mua ngay
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
  selected: {
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
