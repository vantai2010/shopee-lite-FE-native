import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import bg5 from "../../Image/background5.png";
import { getTransactionByUserService, handleConfirmReceivedProductByUserService, handleReviewProductBoughtService } from "../../service/appService";
import keyMap from "../../utils/constant/keyMap";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { Toast } from "toastify-react-native";
import environment from "../../utils/constant/environment";
import handleFormatMoney from "../../utils/formatMoney";

const WaitShipping = () => {
  const language = useSelector(state => state.app.language)
  const [listData, setListData] = useState([])
  const notifySocket = useSelector(state => state.app.notifySocket)
  const userData = useSelector(state => state.app.userData)
  const [isModalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0); // Số sao đánh giá, ban đầu là 0
  const [review, setReview] = useState(''); // Đánh giá nhập vào
  const idReview = useRef()
  const [textErr, setTextErr] = useState("")

  const getListData = async () => {
    let response = await getTransactionByUserService(keyMap.DANGGIAO)
    if (response && response.errCode === 0) {
      setListData(response.data)
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getListData()
  }, [])


  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (text) => {
    setReview(text);
  };

  const submitReview = async () => {
    if (rating === 0) {
      return setTextErr(language === keyMap.EN ? "Vui chọn số sao mà bạn muốn đánh giá" : "Vui chọn số sao mà bạn muốn đánh giá")
    }
    let response = await handleReviewProductBoughtService({
      reviewId: idReview.current,
      rating: rating,
      comment: review
    })
    if (response && response.errCode === 0) {
      await getListData()
      setModalVisible(false)
      Toast.success(language === keyMap.EN ? response.messageEN : response.messageVI)
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  };

  const handleConfirmReceived = async (cart) => {
    let response = await handleConfirmReceivedProductByUserService({ cartId: cart.id })
    if (response && response.errCode === 0) {
      idReview.current = response.reviewId
      await getListData()
      setModalVisible(true)
      notifySocket?.emit("user-confirm-receive-product", {
        sender: userData.id,
        receiverId: cart.supplierId,
        productId: cart.productId,
        productName: cart.productCartData?.name
      })
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}><Text>X</Text></TouchableOpacity>
          <Text>Đánh giá sao:</Text>
          <View style={{ flexDirection: 'row' }}>
            {
              [1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                  {star <= rating ? (
                    <Text>⭐</Text>
                  ) : (
                    <Text>☆</Text>
                  )}
                </TouchableOpacity>
              ))
            }
          </View>
          <Text style={{ color: "red" }}>{textErr}</Text>
          <Text>Ý kiến đánh giá:</Text>
          <TextInput
            placeholder="Nhập ý kiến đánh giá..."
            onChangeText={handleReviewChange}
            value={review}
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity style={{ borderWidth: 4 }} onPress={submitReview}>
            <Text>Gửi đánh giá</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView style={styles.container}>
        {
          listData.length > 0 ?
            listData.map(item => {
              return (
                <TouchableOpacity key={item.id} style={styles.infoProduct}>
                  <View style={styles.nameShop}>
                    <Text style={styles.textName}>Shopee Mall</Text>
                    <Text style={{ marginLeft: 20, fontWeight: "600" }}>{language === keyMap.EN ? `${item.userSupplierCartData?.firstName} ${item.userSupplierCartData?.lastName}` : `${item.userSupplierCartData?.lastName} ${item.userSupplierCartData?.firstName}`}</Text>
                  </View>

                  <View style={styles.product}>
                    <View>
                      <Image style={{ width: 70, height: 50 }} source={{ uri: environment.BASE_URL_BE_IMG + item.productCartData?.image[0] }} />
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
                        {item.productTypeCartData?.type}{item.productTypeCartData?.size ? `- ${item.productTypeCartData.size}` : ""}
                      </Text>
                      <Text style={styles.goods}>7 ngày trả hàng</Text>
                    </View>
                  </View>

                  <View style={styles.payComplete}>
                    <Text style={{ color: "#a19f9f", fontSize: 16 }}>Sản phẩm</Text>
                    <Text style={{ color: "#a19f9f", fontSize: 16 }}>
                      Thành tiền:
                      <Text style={{ color: "red", fontWeight: "500", fontSize: 16 }}>
                        {handleFormatMoney(item.productFee + item.shipFee)}
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.statusNew}>
                    <Text style={{ color: "#0f9483" }}>Đơn hàng đang chờ được giao</Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderTopWidth: 0.3,
                    }}
                  >
                    <Text style={{ color: "#a19f9f", flex: 1.5, fontSize: 13 }}>
                      Vui lòng chỉ nhấn 'Đã nhận được hàng' khi đơn hàng đã được giao đến
                      bạn và sản phẩm nhận được không có vấn đề nào.
                    </Text>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ee4d2d",
                        width: "40%",
                        flex: 1,
                        height: "60%",
                        padding: 10,
                        textAlign: "center",
                        fontWeight: "500",
                        fontSize: 13,
                        color: "#ffffff",
                      }}
                      onPress={() => { setModalVisible(true); handleConfirmReceived(item) }}
                    >
                      <Text>
                        Đã nhận được hàng
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )
            })
            :
            <Text>Không có đơn hàng nào</Text>
        }

      </ScrollView>
    </>
  );
};

export default WaitShipping;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#cccccc",
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
    borderTopWidth: 0.3,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusNew: {
    backgroundColor: "#ffffff",
    padding: 10,
    paddingVertical: 5,
    borderTopWidth: 0.3,
  },
});
