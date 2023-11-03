import React, { useEffect } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import ShoppingMethod from "./ShoppingMethod";
import {
  buyProductService,
  pushPorductToCartService,
} from "../../service/appService";
import moment from "moment";
import environment from "../../utils/constant/environment";
import handleFormatMoney from "../../utils/formatMoney";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

const Pay = () => {
  const route = useRoute();
  const data = route.params?.data;
  const language = useSelector((state) => state.app.language);
  const userData = useSelector((state) => state.app.userData);
  const notifySocket = useSelector((state) => state.app.notifySocket);
  const navigation = useNavigation();
  const [vouchers, setVouchers] = useState({});
  const [productPrice, setProductPrice] = useState(data?.productFee);
  const [shipMethod, setShipMethod] = useState();
  const [methodPay, setMethodPay] = useState({});

  useEffect(() => {
    let totalPrice = data?.productFee;
    if (vouchers.giamgia === null) {
      totalPrice = data?.productFee;
    } else if (Object.keys(vouchers).includes("giamgia")) {
      if (vouchers.giamgia?.discount.includes("%")) {
        let discountPrice =
          data?.productFee * (vouchers.giamgia?.discount.split("%")[0] / 100);
        totalPrice = data?.productFee - discountPrice;
        if (totalPrice < 0) {
          totalPrice = 0;
        }
      } else {
        totalPrice =
          data?.productFee - vouchers.giamgia?.discount.split("đ")[0];
        if (totalPrice < 0) {
          totalPrice = 0;
        }
      }
    }
    setProductPrice(totalPrice);
  }, [vouchers]);

  const handleBuyProduct = async () => {
    if (!shipMethod) {
      return alert(
        language === keyMap.EN
          ? "You must choose a shipping method"
          : "Bạn phải chọn phương thức vận chuyển"
      );
    }
    if (!methodPay) {
      return alert(
        language === keyMap.EN
          ? "You must choose a payment method"
          : "Bạn phải chọn phương thức thanh toán"
      );
    }

    let shipFee = calShipPrice(shipMethod, vouchers);
    let response = await buyProductService({
      productId: data.productId,
      productTypeId: data.productTypeId,
      quantity: data.quantity,
      supplierId: data.supplierId,
      productFee: data.productFee,
      shipFee: shipFee,
      time: moment().format(environment.FORMAT_TIME),
      statusId: methodPay.value,
      cartId: data?.cartId,
    });
    if (response && response.errCode === 0) {
      navigation.navigate(namePage.TRANSACTION, { page: keyMap.CHOXACNHAN });
      notifySocket?.emit("user-buy-product", {
        productId: data.productId,
        receiverId: data.supplierId,
        senderId: userData.id,
      });
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI);
    }
  };

  const handlePayMethods = () => {
    navigation.navigate(namePage.PAYMETHOD, {
      setMethodPay: setMethodPay,
    });
  };

  const handleOptionVouchers = () => {
    navigation.navigate(namePage.VOUCHERS, {
      productFee: data.productFee,
      productId: data.productId,
      setVouchers: setVouchers,
    });
  };

  const handleOptionTransport = () => {
    navigation.navigate(namePage.SHOPPINGMETHOD, {
      addressUser: userData.address,
      addressShop: data.product.productSupplierData.address,
      setShipMethod: setShipMethod,
    });
  };

  const productTypeSelected = data.product?.productTypeData.find(
    (item) => item.id === data.productTypeId
  );

  const calShipPrice = (shipMethod, vouchers) => {
    let shipPrice = 0,
      discount = 0;
    shipPrice = shipMethod?.cost ? shipMethod?.cost : 0;
    discount = vouchers.vanchuyen?.discount
      ? vouchers.vanchuyen?.discount.split("đ")[0]
      : 0;
    return shipPrice - discount < 0 ? 0 : shipPrice - discount;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.address}>
        <View style={styles.addressIcon}>
          <AntDesign name="enviromento" size={20} color="#ff7337" />
        </View>
        <View style={styles.addressText}>
          <Text>
            <TextFormatted id="pay.address" />
          </Text>
          <Text>
            {language === keyMap.EN
              ? `${userData.firstName} ${userData.lastName}`
              : `${userData.lastName} ${userData.firstName}`}{" "}
            (+84) {userData.phoneNumber}
          </Text>
          <Text>{userData.address}</Text>
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
            <TextFormatted id="mall.favorite" />
          </Text>
          <Text style={{ marginLeft: 5, fontWeight: "600" }}>aibao1.vn</Text>
        </View>

        <View style={styles.inforProduct}>
          <View style={styles.image}>
            <Image
              style={{ width: 70, height: 70 }}
              source={{
                uri: environment.BASE_URL_BE_IMG + data.product?.image[0],
              }}
            />
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
              {data.product.name}
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
              <TextFormatted id="pay.quantity" /> : {data.quantity}
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
              <TextFormatted id="pay.classify" />: {productTypeSelected.type}{" "}
              {productTypeSelected.size}
            </Text>
            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
              {handleFormatMoney(data.productFee)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.voucher}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>
            <TextFormatted id="pay.transport" />
          </Text>
        </View>
      </View>

      <TouchableOpacity
        TouchableOpacity
        onPress={handleOptionTransport}
        style={styles.transport}
      >
        {shipMethod ? (
          <>
            <View style={styles.shipping}>
              <Text style={{ fontWeight: 600 }}>{shipMethod.method}</Text>
              <Text style={{ paddingLeft: 150 }}>
                {handleFormatMoney(shipMethod.cost)}
              </Text>
            </View>
            <View>
              <Text style={{ paddingVertical: 10, fontWeight: 300 }}>
                Stand Express
              </Text>
              <Text style={{ fontWeight: 300 }}>
                <TextFormatted id="pay.receive" /> {shipMethod.date}
              </Text>
            </View>
          </>
        ) : (
          <View style={{ justifyContent: "center" }}>
            <Text>
              <TextFormatted id="pay.select" />
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.voucher}>
        <View style={styles.pay}>
          <Fontisto name="paypal" size={20} color="#ff7337" />
          <TouchableOpacity
            onPress={handleOptionVouchers}
            style={styles.optionVoucher}
          >
            <Text style={{ color: "red" }}>
              <TextFormatted id="pay.voucher" />
            </Text>
            <AntDesign name="right" size={20} color="red" />
          </TouchableOpacity>
        </View>
        {Object.keys(vouchers).map((item) => {
          if (vouchers[item]?.discount !== undefined) {
            return (
              <View style={styles.method}>
                <Text>
                  {item === "vanchuyen"
                    ? language === keyMap.EN
                      ? "Ship"
                      : "Vận chuyển"
                    : language === keyMap.EN
                    ? "Discount"
                    : "Giảm giá"}
                </Text>
                <Text
                  style={{
                    fontSize: fontSize.h2,
                    color: "red",
                    fontWeight: 500,
                  }}
                >
                  {language === keyMap.EN
                    ? `Discount ${
                        vouchers[item]?.discount
                      } with minimum order ${handleFormatMoney(
                        vouchers[item]?.conditionsPrice
                      )}`
                    : `Giảm ${
                        vouchers[item]?.discount
                      } với đơn tối thiểu ${handleFormatMoney(
                        vouchers[item]?.conditionsPrice
                      )}`}
                </Text>
              </View>
            );
          }
        })}
      </View>
      <View style={styles.payLoad}>
        <View style={styles.pay}>
          <Fontisto name="paypal" size={20} color="#ff7337" />
          <TouchableOpacity style={styles.optionPay} onPress={handlePayMethods}>
            <Text style={{ color: "red" }}>
              <TextFormatted id="pay.payment" />
            </Text>
            <AntDesign name="right" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.method}>
          <Text
            style={{ fontSize: fontSize.h2, color: "red", fontWeight: 500 }}
          >
            {language === keyMap.EN ? methodPay.nameEN : methodPay.nameVI}
          </Text>
        </View>
      </View>

      <View style={styles.receipt}>
        <Text style={{ fontSize: fontSize.h2, fontWeight: 600 }}>
          <TextFormatted id="pay.details" />
        </Text>
        <View style={styles.sum}>
          <Text>
            <TextFormatted id="pay.total" />
          </Text>
          <Text style={{ paddingRight: 30 }}>
            <Text style={{ textDecorationLine: "line-through" }}>
              {productPrice !== data?.productFee
                ? handleFormatMoney(data?.productFee)
                : ""}
            </Text>{" "}
            {handleFormatMoney(productPrice)}
          </Text>
        </View>
        <View style={styles.sum}>
          <Text>
            <TextFormatted id="pay.ship" />
          </Text>
          <Text style={{ paddingRight: 30 }}>
            <Text style={{ textDecorationLine: "line-through" }}>
              {vouchers.vanchuyen ? handleFormatMoney(shipMethod?.cost) : ""}
            </Text>{" "}
            {handleFormatMoney(calShipPrice(shipMethod, vouchers))}
          </Text>
        </View>
        <View style={styles.sum}>
          <Text style={{ fontSize: fontSize.h2, fontWeight: 500 }}>
            <TextFormatted id="pay.totalpay" />
          </Text>
          <Text style={{ paddingRight: 30 }}>
            {handleFormatMoney(
              productPrice + calShipPrice(shipMethod, vouchers)
            )}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buyProduct} onPress={handleBuyProduct}>
        <Text style={{ textAlign: "center", color: "#ffffff" }}>Mua ngay</Text>
      </TouchableOpacity>
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
  voucher: {
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
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
  optionVoucher: {
    marginLeft: 220,
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
