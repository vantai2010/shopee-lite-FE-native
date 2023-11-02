import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import bg5 from "../../Image/background5.png";
import { getTransactionByUserService } from "../../service/appService";
import keyMap from "../../utils/constant/keyMap";
import { useSelector } from "react-redux";
import environment from "../../utils/constant/environment";
import handleFormatMoney from "../../utils/formatMoney";

const WaitDelivery = () => {
  const language = useSelector(state => state.app.language)
  const [listData, setListData] = useState([])
  const getListData = async () => {
    let response = await getTransactionByUserService(keyMap.CHOLAYHANG)
    if (response && response.errCode === 0) {
      setListData(response.data)
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getListData()
  }, [])

  return (
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
                  <Text style={{ color: "#0f9483" }}>Đơn hàng đang được chờ lấy</Text>
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
                  <Text style={{ width: "50%", color: "#a19f9f" }}>
                    Đơn hàng của bạn sắp được chuyển đi
                  </Text>
                  <Text
                    style={{
                      backgroundColor: "grey",
                      width: "40%",
                      paddingVertical: 10,
                      textAlign: "center",
                      fontWeight: "500",
                      color: "#ffffff",
                    }}
                  >
                    Đã nhận được hàng
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
          :
          <Text>Không có đơn hàng nào</Text>
      }

      {/* <TouchableOpacity style={styles.infoProduct}>
        <View style={styles.nameShop}>
          <Text style={styles.textName}>Shopee Mall</Text>
          <Text style={{ marginLeft: 20, fontWeight: "600" }}>ABC ACADEMY</Text>
        </View>

        <View style={styles.product}>
          <View>
            <Image style={{ width: 70, height: 50 }} source={bg5} />
          </View>
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontSize: 17, maxWidth: "80%", marginLeft: 10 }}
            >
              Áo polo nam cổ bẻ vớ jasaksdfkaskfkkkkkkkkaks
            </Text>
            <Text style={{ marginLeft: 10, color: "#a19f9f" }}>
              Vàng Bò, Size(67-79kg)
            </Text>
            <Text style={styles.goods}>7 ngày trả hàng</Text>
          </View>
        </View>

        <View style={styles.payComplete}>
          <Text style={{ color: "#a19f9f", fontSize: 16 }}>Sản phẩm</Text>
          <Text style={{ color: "#a19f9f", fontSize: 16 }}>
            Thành tiền:
            <Text style={{ color: "red", fontWeight: "500", fontSize: 16 }}>
              159000
            </Text>
          </Text>
        </View>

        <View style={styles.statusNew}>
          <Text style={{ color: "#0f9483" }}>Đơn hàng đang được chờ lấy</Text>
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
          <Text style={{ width: "50%", color: "#a19f9f" }}>
            Đơn hàng của bạn sắp được chuyển đi
          </Text>
          <Text
            style={{
              backgroundColor: "grey",
              width: "40%",
              paddingVertical: 10,
              textAlign: "center",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Đã nhận được hàng
          </Text>
        </View>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default WaitDelivery;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#cccccc",
    height: "auto",
    marginBottom: 100
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
    padding: 10,
    borderTopWidth: 0.3,
    borderTopColor: "grey",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusNew: {
    borderTopWidth: 0.3,
    borderTopColor: "grey",
    backgroundColor: "#ffffff",
    padding: 10,
    paddingVertical: 5,
  },
});
