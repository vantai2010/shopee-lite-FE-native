import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import bg5 from "../../Image/background5.png";
import {
  getTransactionByUserService,
  handleCancelBuyProductService,
} from "../../service/appService";
import keyMap from "../../utils/constant/keyMap";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import { Toast } from "toastify-react-native";
import environment from "../../utils/constant/environment";
import handleFormatMoney from "../../utils/formatMoney";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

const Waiting = () => {
  const language = useSelector((state) => state.app.language);
  const notifySocket = useSelector((state) => state.app.notifySocket);
  const userData = useSelector((state) => state.app.userData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [listData, setListData] = useState([]);
  const cartSelected = useRef();
  const getListData = async () => {
    let response = await getTransactionByUserService(keyMap.CHOXACNHAN);
    if (response && response.errCode === 0) {
      setListData(response.data);
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI);
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCancelBuyProduct = async () => {
    let response = await handleCancelBuyProductService(cartSelected.current.id);
    if (response && response.errCode === 0) {
      await getListData();
      Toast.success(
        language === keyMap.EN ? response.messageEN : response.messageVI
      );
      toggleModal();
      notifySocket?.emit("user-cancel-buy-product", {
        senderId: userData.id,
        receiverId: cartSelected.current.supplierId,
        productName: cartSelected.current.productCartData?.name,
        productId: cartSelected.current.productId,
      });
    } else {
      Toast.error(
        language === keyMap.EN ? response.messageEN : response.messageVI
      );
    }
  };

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>
            <TextFormatted id="transaction.cancelorder" />
          </Text>
          <Button title="Hủy" onPress={toggleModal} />
          <Button title="Xác nhận" onPress={handleCancelBuyProduct} />
        </View>
      </Modal>

      <ScrollView style={styles.container}>
        {listData.length > 0 ? (
          listData.map((item) => {
            return (
              <TouchableOpacity key={item.id} style={styles.infoProduct}>
                <View style={styles.nameShop}>
                  <Text style={styles.textName}>Shopee Mall</Text>
                  <Text style={{ marginLeft: 20, fontWeight: "600" }}>
                    {language === keyMap.EN
                      ? `${item.userSupplierCartData?.firstName} ${item.userSupplierCartData?.lastName}`
                      : `${item.userSupplierCartData?.lastName} ${item.userSupplierCartData?.firstName}`}
                  </Text>
                </View>

                <View style={styles.product}>
                  <View>
                    <Image
                      style={{ width: 70, height: 50 }}
                      source={{
                        uri:
                          environment.BASE_URL_BE_IMG +
                          item.productCartData?.image[0],
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{ fontSize: 17, maxWidth: "80%", marginLeft: 10 }}
                    >
                      {item.productCartData?.name}
                    </Text>
                    <Text style={{ marginLeft: 10, color: "#a19f9f" }}>
                      {item.productTypeCartData?.type}
                      {item.productTypeCartData?.size
                        ? `- ${item.productTypeCartData.size}`
                        : ""}
                    </Text>
                    <Text style={styles.goods}>
                      <TextFormatted id="transaction.day" />
                    </Text>
                  </View>
                </View>

                <View style={styles.payComplete}>
                  <Text style={{ color: "#a19f9f", fontSize: 16 }}>
                    <TextFormatted id="transaction.product" />
                  </Text>
                  <Text style={{ color: "#a19f9f", fontSize: 16 }}>
                    <TextFormatted id="transaction.product" />
                    <Text
                      style={{ color: "red", fontWeight: "500", fontSize: 16 }}
                    >
                      {handleFormatMoney(item.productFee + item.shipFee)}
                    </Text>
                  </Text>
                </View>

                <View style={styles.statusNew}>
                  <Text style={{ color: "#0f9483" }}>
                    Đơn hàng đang chờ được xác nhận
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    borderTopWidth: 0.3,
                    borderTopColor: "grey",
                    backgroundColor: "#ffffff",
                    padding: 10,
                    flexDirection: "row-reverse",
                    // justifyContent: "space-between",
                    right: 0,
                  }}
                  onPress={() => {
                    cartSelected.current = item;
                    toggleModal();
                  }}
                >
                  <Text
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ee4d2d",
                      width: "50%",
                      //   flex: 1,
                      height: "100%",
                      padding: 15,
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: 13,
                      color: "#ffffff",
                    }}
                  >
                    Hủy đơn
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>Không có đơn hàng nào</Text>
        )}
      </ScrollView>
    </>
  );
};

export default Waiting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccccc",
    height: "auto",
    marginBottom: 100,
  },
  infoProduct: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  nameShop: {
    padding: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  textName: {
    backgroundColor: "red",
    color: "#ffffff",
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  product: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
  goods: {
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "red",
    width: "57%",
    color: "red",
  },
  payComplete: {
    paddingTop: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    flexDirection: "row",
    borderTopWidth: 0.3,
    justifyContent: "space-between",
  },
  statusNew: {
    backgroundColor: "#ffffff",
    padding: 10,
    paddingVertical: 5,
    borderTopWidth: 0.3,
  },
});
