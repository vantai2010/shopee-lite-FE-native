import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import bg5 from "../../Image/background5.png";
import handleFormatMoney from "../../utils/formatMoney";

const Cancelled = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.infoProduct}>
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

        <View
          style={{
            borderTopWidth: 0.3,
            borderTopColor: "grey",
            backgroundColor: "#ffffff",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            right: 0,
          }}
        >
          <Text
            style={{
              color: "#a19f9f",
              flex: 1.5,
              fontSize: 13,
              paddingVertical: 10,
            }}
          >
            Đã hủy bởi bạn
          </Text>
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
            Mua lại
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cancelled;

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
    padding: 10,
    borderTopWidth: 0.3,
    borderTopColor: "grey",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusNew: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 0.3,
    borderTopColor: "grey",
  },
});
