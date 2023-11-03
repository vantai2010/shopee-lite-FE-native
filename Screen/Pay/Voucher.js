import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import bg20 from "../../Image/background20.png";
import bg21 from "../../Image/background21.png";
import bg22 from "../../Image/background22.png";
import bg23 from "../../Image/background23.png";
import bg24 from "../../Image/background24.png";
import bg25 from "../../Image/background25.png";
import bg26 from "../../Image/background26.png";
import bg27 from "../..//Image/background27.png";
import bg28 from "../..//Image/background28.png";
import namePage from "../../utils/constant/namePage";
import keyMap from "../../utils/constant/keyMap";
import { getAllVouchersService } from "../../service/appService";
import { useSelector } from "react-redux";
import handleFormatMoney from "../../utils/formatMoney";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

const Voucher = () => {
  const language = useSelector((state) => state.app.language);
  const route = useRoute();
  const dataSend = route.params;
  const navigation = useNavigation();
  const [listVouchers, setListVouchers] = useState([
    {
      id: 1,
      productId: 58,
      userId: "9",
      type: keyMap.VANCHUYEN,
      discount: "300000đ",
      condtionsPrice: "60000000",
      timeEnd: "25/10/2023",
    },
    {
      id: 2,
      productId: 58,
      userId: "9",
      type: keyMap.GIAMGIA,
      discount: "200000đ",
      conditionsPrice: "100000",
      timeEnd: "25/10/2023",
    },
    {
      id: 3,
      productId: 58,
      userId: "9",
      type: keyMap.VANCHUYEN,
      discount: "10000đ",
      conditionsPrice: "100000",
      timeEnd: "25/10/2023",
    },
    {
      id: 4,
      productId: 58,
      userId: "9",
      type: keyMap.GIAMGIA,
      discount: "10%",
      conditionsPrice: "100000",
      timeEnd: "25/10/2023",
    },
    {
      id: 5,
      productId: 58,
      userId: "9",
      type: keyMap.VOUCHERSHOP,
      discount: "500000đ",
      conditionsPrice: "100000",
      timeEnd: "25/10/2023",
    },
  ]);
  const [isVoucherPressed, setIsVoucherPressed] = useState(null);
  const [isVoucherShipPressed, setIsVoucherShipPressed] = useState(null);
  const voucherSelected = useRef({
    vanchuyen: null,
    giamgia: null,
  });

  const getListVouchers = async () => {
    let response = await getAllVouchersService(dataSend?.productId);
    if (response && response.errCode === 0) {
      setListVouchers(response.data);
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI);
    }
  };

  useEffect(() => {
    getListVouchers();
  }, [dataSend]);

  const handleAddColor = (type) => {
    if (type.id === isVoucherPressed) {
      voucherSelected.current.giamgia = null;
      setIsVoucherPressed(null);
    } else {
      voucherSelected.current.giamgia = type;
      setIsVoucherPressed(type.id);
    }
  };

  const handleAddColorVanChuyenVoucher = (type) => {
    if (type.id === isVoucherShipPressed) {
      voucherSelected.current.vanchuyen = null;
      setIsVoucherShipPressed(null);
    } else {
      voucherSelected.current.vanchuyen = type;
      setIsVoucherShipPressed(type.id);
    }
  };

  const handleConfirmChoiseVouchers = () => {
    console.log(voucherSelected.current);
    dataSend.setVouchers(voucherSelected.current);
    navigation.goBack();
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            <TextFormatted id="pay.fees" />
          </Text>
          <Text style={{ fontSize: 13, color: "#9c9595" }}>
            <TextFormatted id="pay.choose" />
          </Text>

          {listVouchers.length > 0 ? (
            listVouchers.map((item) => {
              if (item.type === keyMap.VANCHUYEN) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      dataSend.productFee > item.conditionsPrice
                        ? handleAddColorVanChuyenVoucher(item)
                        : null
                    }
                    style={styles.voucher}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Image
                          style={{ width: 100, height: 100 }}
                          source={bg21}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "500" }}>
                          <TextFormatted id="pay.minimize" /> {item.discount}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          <TextFormatted id="pay.application" />{" "}
                          {handleFormatMoney(item.conditionsPrice)}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#9c9595" }}>
                          <TextFormatted id="pay.expired" /> {item.timeEnd}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.check,
                        {
                          backgroundColor:
                            isVoucherShipPressed === item.id
                              ? "#ee4d2d"
                              : "#ffffff",
                        },
                      ]}
                    ></View>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <Text>
              <TextFormatted id="pay.votes" />
            </Text>
          )}
        </View>

        <View style={styles.containerCenter}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            <TextFormatted id="pay.discount" />
          </Text>
          <Text style={{ fontSize: 13, color: "#9c9595" }}>
            <TextFormatted id="pay.choosevoucher" />
          </Text>
          {/* <TouchableOpacity
                        onPress={() => handleAddColor("Giảm 10%")}
                        style={styles.voucher}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Image style={{ width: 100, height: 100 }} source={bg22} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "500" }}>Giảm 10%</Text>
                                <Text style={{ fontSize: 12 }}>Đơn tối thiểu 150K</Text>
                                <Text style={{ fontSize: 12, color: "#9c9595" }}>
                                    Hết hạn 24-10-2023
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.check,
                                {
                                    backgroundColor:
                                        isVoucherPressed === "Giảm 10%" ? "#ee4d2d" : "#ffffff",
                                },
                            ]}
                        ></View>
                    </TouchableOpacity> */}
          {/* <TouchableOpacity
                        onPress={() => handleAddColor("Giảm 8%")}
                        style={styles.voucher}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Image style={{ width: 100, height: 100 }} source={bg23} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "500" }}>Giảm 8%</Text>
                                <Text style={{ fontSize: 12 }}>Đơn tối thiểu 100K</Text>
                                <Text style={{ fontSize: 12, color: "#9c9595" }}>
                                    Hết hạn 24-10-2023
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.check,
                                {
                                    backgroundColor:
                                        isVoucherPressed === "Giảm 8%" ? "#ee4d2d" : "#ffffff",
                                },
                            ]}
                        ></View>
                    </TouchableOpacity> */}
          {listVouchers.length > 0 ? (
            listVouchers.map((item) => {
              if (item.type === keyMap.GIAMGIA) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      dataSend.productFee > item.conditionsPrice
                        ? handleAddColor(item)
                        : null
                    }
                    style={styles.voucher}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Image
                          style={{ width: 100, height: 100 }}
                          source={bg23}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "500" }}>
                          <TextFormatted id="pay.minimize" /> {item.discount}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          <TextFormatted id="pay.application" />{" "}
                          {handleFormatMoney(item.conditionsPrice)}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#9c9595" }}>
                          <TextFormatted id="pay.expired" /> {item.timeEnd}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.check,
                        {
                          backgroundColor:
                            isVoucherPressed === item.id
                              ? "#ee4d2d"
                              : "#ffffff",
                        },
                      ]}
                    ></View>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <Text>
              <TextFormatted id="pay.votes" />
            </Text>
          )}
        </View>

        <View style={styles.containerEnd}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            <TextFormatted id="pay.vouchershop" />
          </Text>
          <Text style={{ fontSize: 13, color: "#9c9595" }}>
            <TextFormatted id="pay.type" />
          </Text>

          {listVouchers.length > 0 ? (
            listVouchers.map((item) => {
              if (item.type === keyMap.VOUCHERSHOP) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      dataSend.productFee > item.conditionsPrice
                        ? handleAddColor(item)
                        : null
                    }
                    style={styles.voucher}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Image
                          style={{ width: 100, height: 100 }}
                          source={bg25}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "500" }}>
                          <TextFormatted id="pay.minimize" /> {item.discount}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          <TextFormatted id="pay.application" />{" "}
                          {handleFormatMoney(item.conditionsPrice)}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#9c9595" }}>
                          <TextFormatted id="pay.expired" /> {item.timeEnd}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.check,
                        {
                          backgroundColor:
                            isVoucherPressed === item.id
                              ? "#ee4d2d"
                              : "#ffffff",
                        },
                      ]}
                    ></View>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <Text>
              <TextFormatted id="pay.votes" />
            </Text>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          paddingVertical: 20,
          alignItems: "center",
          backgroundColor: "#ee4d2d",
        }}
        onPress={handleConfirmChoiseVouchers}
      >
        <Text style={{ fontSize: 18, color: "#ffffff", fontWeight: "500" }}>
          <TextFormatted id="pay.confirm" />
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Voucher;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerCenter: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  containerEnd: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  voucher: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    alignItems: "center",
    justifyContent: "space-between",
  },
  check: {
    borderWidth: 1,
    width: 18,
    height: 18,
    borderRadius: 50,
    borderColor: "#cccccc",
  },
});
