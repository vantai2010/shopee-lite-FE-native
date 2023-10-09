import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import bg7 from "../../Image/background11.png";
import fontSize from "../../utils/constant/fontSize";
import ModalNotification from "../ProductDetails/Modal/ModalNotification";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
const Pay = () => {
  const navigation = useNavigation();
  const [isModalVisibleCart, setModalVisibleCart] = useState(false);
  const [notification, setNotification] = useState("");

  const handleCart = () => {
    setModalVisibleCart(!isModalVisibleCart);
    setNotification("Mua hàng thành công !");
  };

  const handlePayMethods = () => {
    navigation.navigate(namePage.PAYMETHOD);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.address}>
        <View style={styles.addressIcon}>
          <AntDesign name="enviromento" size={20} color="#ff7337" />
        </View>
        <View style={styles.addressText}>
          <Text>Địa chỉ nhận hàng</Text>
          <Text>Trần Văn Thuận (+84) 824064068</Text>
          <Text>
            Số 10, nghách 30, ngõ 75, Giải Phóng, Hai Bà Trưng, Hà Nội
          </Text>
        </View>
      </View>
      <View style={styles.product}>
        <View style={styles.nameShop}>
          <Text
            style={{
              paddingHorizontal: 10,
              borderRadius: 3,
              color: "#ffffff",
              backgroundColor: "#ff7337",
            }}
          >
            Yêu thích
          </Text>
          <Text style={{ marginLeft: 5, fontWeight: "600" }}>aibao1.vn</Text>
        </View>

        <View style={styles.inforProduct}>
          <View style={styles.image}>
            <Image style={{ width: 70, height: 70 }} source={bg7} />
          </View>
          <View style={styles.inforText}>
            <Text
              style={{
                width: 300,
                paddingLeft: 10,
                fontSize: fontSize.h2,
                fontWeight: "700",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Mắt kính 3d untral mắt kình 4d unltra mát kính 5d unltra
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>Số lượng: 1</Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
              Phân loại: Đen Trắng
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>20.000d</Text>
          </View>
        </View>
      </View>
      <View style={styles.transport}>
        <View style={styles.shipping}>
          <Text style={{ fontWeight: 600 }}>Vận chuyển nhanh</Text>
          <Text style={{ paddingLeft: 150 }}>15.000đ</Text>
        </View>
        <View>
          <Text style={{ paddingVertical: 10, fontWeight: 300 }}>
            Stand Express
          </Text>
          <Text style={{ fontWeight: 300 }}>
            Nhận trả ngày 15 Th10 - 17 Th10
          </Text>
        </View>
      </View>
      <View style={styles.payLoad}>
        <View style={styles.pay}>
          <Fontisto name="paypal" size={20} color="#ff7337" />
          <TouchableOpacity style={styles.optionPay} onPress={handlePayMethods}>
            <Text style={{ color: "red" }}>Chọn phương thức thanh toán</Text>
            <AntDesign name="right" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.method}>
          <Text
            style={{ fontSize: fontSize.h2, color: "red", fontWeight: 500 }}
          >
            Thanh toán khi nhận hàng
          </Text>
        </View>
      </View>

      <View style={styles.receipt}>
        <Text style={{ fontSize: fontSize.h2, fontWeight: 600 }}>
          Chi tiết thanh toán
        </Text>
        <View style={styles.sum}>
          <Text>Tổng tiền hàng</Text>
          <Text style={{ paddingRight: 30 }}>15.000</Text>
        </View>
        <View style={styles.sum}>
          <Text>Tổng tiền phí vận chuyển</Text>
          <Text style={{ paddingRight: 30 }}>15.000</Text>
        </View>
        <View style={styles.sum}>
          <Text style={{ fontSize: fontSize.h2, fontWeight: 500 }}>
            Tổng thanh toán
          </Text>
          <Text style={{ paddingRight: 30 }}>15.000</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buyProduct} onPress={handleCart}>
        <Text style={{ textAlign: "center", color: "#ffffff" }}>Mua ngay</Text>
      </TouchableOpacity>
      <ModalNotification
        isVisible={isModalVisibleCart}
        message={notification}
        onClose={handleCart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  address: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 4,
    borderColor: "#ff7337",
  },
  addressIcon: {
    alignItems: "flex-end",
    flex: 0.2,
    width: 50,
    height: 50,
  },
  addressText: {
    flex: 2,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },

  product: {
    backgroundColor: "#fffffff",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#cccccc",
  },
  nameShop: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 20,
  },
  inforProduct: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 20,
  },
  image: {},
  inforText: {},
  transport: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: "#d7fcd5",
    paddingBottom: 20,
  },
  shipping: {
    flexDirection: "row",
  },
  payLoad: {
    backgroundColor: "#f7d0b5",
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  pay: {
    flexDirection: "row",
  },
  method: {
    paddingTop: 10,
  },
  optionPay: {
    marginLeft: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  receipt: {
    flexDirection: "colum",
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
  },
  sum: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyProduct: {
    marginTop: 100,
    marginHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ff7337",
    borderRadius: 10,
  },
});

export default Pay;
