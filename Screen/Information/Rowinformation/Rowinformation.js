import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

export default function RowInformation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.InformationTransport}>
          <View
            style={{
              flex: 0.2,
              alignItems: "flex-end",
            }}
          >
            <MaterialCommunityIcons name="caravan" size={24} color="black" />
          </View>
          <View style={{ flex: 2 }}>
            <Text
              style={{ fontSize: "h2", fontWeight: "600", marginBottom: 10 }}
            >
              Thông tin vận chuyển
            </Text>
            <Text style={{ color: "#8d8e8f" }}>Nhanh </Text>
            <Text style={{ color: "#8d8e8f" }}>Express hdhfhasfhsdh </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.textTransport}></Text>
              </View>
              <View>
                <Text style={{ marginLeft: 10, color: "#25a896" }}>
                  Đơn hàng đã được giao thành công
                </Text>
                <Text style={{ marginTop: 10 }}>Trần Văn Thuận</Text>
                <Text>(+84) 824064068</Text>
                <Text>Số 10 nghách 30, ngõ 75 Giải Phóng, Hai Bà Trưng</Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: 4,
                borderLeftWidth: 1,
                borderColor: "#cccccc",
                paddingVertical: 10,
              }}
            >
              <Text style={{ paddingLeft: 16, color: "#8d8e8f" }}>
                30-10-2023 12:30
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <View
          style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,.05)",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Devan Silver</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={{ fontWeight: 300 }}>Xem Shop</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 20 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 12,
          }}
        >
          <Image
            source={require("../../../Image/background13.png")}
            style={{ resizeMode: "contain", height: 80, width: 80 }}
          />
          <View style={{ justifyContent: "space-between" }}>
            <Text>Vòng bạc</Text>
            <Text>x1</Text>
            <Text style={{ color: "#ee4d2d" }}>đ235.000</Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>Tổng tiền hàng</Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>đ470.000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>Phí vận chuyển</Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>đ16.500</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>
              Giảm giá phí vận chuyển
            </Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>-đ16.500</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>Voucher từ Shopee</Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>-đ80.000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>Voucher từ shop</Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>-đ20.000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: 600 }}>Thành tiền</Text>
            <Text style={{ fontWeight: 600 }}>đ366.500</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", marginTop: 12 }}>
        <View style={{ margin: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Ionicons
              name="md-wallet"
              size={24}
              color="#ee4d2d"
              style={{ lineHeight: 30 }}
            />
            <Text
              style={{
                lineHeight: 30,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Phương thức thanh toán
            </Text>
          </View>
          <Text
            style={{ color: "rgba(0,0,0,.4)", marginTop: 8, marginLeft: 35 }}
          >
            Ví ShopeePay
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 12,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0,0,0,.05)",
        }}
      >
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: 600 }}>Mã đơn hàng</Text>
            <Text style={{ fontWeight: 600 }}>230918KHTROCU3</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>Thời gian đặt hàng</Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>18-09-2023 00:46</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>
              Thời gian thanh toán
            </Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>18-09-2023 00:46</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>
              Thời gian giao hàng cho vận chuyển
            </Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>18-09-2033 17:46</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.4)" }}>
              Thời gian hoàn thành
            </Text>
            <Text style={{ color: "rgba(0,0,0,.4)" }}>19-09-2023 21:13</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 12,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: 32,
              paddingVertical: 12,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <AntDesign name="message1" size={20} color="#ee4d2d" />
              <Text style={{ fontSize: 16, marginLeft: 4 }}>Liên hệ Shop</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: 32,
              paddingVertical: 12,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Entypo name="star-outlined" size={20} color="black" />
              <Text style={{ fontSize: 16, marginLeft: 4 }}>Liên hệ Shop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    width: "100%",
  },
  InformationTransport: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingBottom: 10,
  },
  textTransport: {
    width: 10,
    height: 10,
    backgroundColor: "#25a896",
    borderRadius: 50,
    borderLeftWidth: 1,
    borderColor: "green",
  },
  Address: {
    backgroundColor: "#ffffff",
    width: "95%",
  },
});
