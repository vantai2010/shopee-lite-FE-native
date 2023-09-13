import { View, Text, StyleSheet } from "react-native";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function ProductInformation() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentUp}>
          <View style={styles.contentUpLeft}>
            <View style={styles.nameProduct}>
              <Text>Áo Kiểu Croptop COLOMBIA Tay Ngắn Cổ Khoét U</Text>
            </View>
          </View>
          <View style={styles.contentUpRight}>
            <View style={styles.triangleUp}></View>
            <View style={styles.rectangle}>
              <Text style={styles.textSale}>Giảm 35%</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentCenter}>
          <Text style={styles.price}>Giá: 159.000đ</Text>
          <View style={styles.love}>
            <Text style={{ color: "#ffffff" }}>Yêu Thích + </Text>
          </View>
        </View>

        <View style={styles.contentDown}>
          <View style={styles.starRate}>
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
          </View>
          <View style={{ paddingLeft: 55 }}>
            <Text>Đã bán : 1k8</Text>
          </View>
          <View style={styles.iconShare}>
            <AntDesign name="hearto" size={24} color="gray" />
            <MaterialCommunityIcons
              style={{ paddingLeft: 20 }}
              name="share"
              size={24}
              color="gray"
            />
          </View>
        </View>

        <View style={styles.voucher}>
          <Text style={styles.voucherShop}>
            Voucher của Shop
            <AntDesign name="arrowright" size={15} color="gray" />
          </Text>
          <Text style={styles.productReduce}>Sản phẩm được giảm 10k</Text>
          <Text style={styles.buyProduct}>mua 2 & giảm 3%</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    height: "auto",
  },
  productReduce: {
    marginHorizontal: 10,
    padding: 5,
    marginTop: 10,
    fontSize: 14,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#ff7337",
  },
  buyProduct: {
    width: "30%",
    marginHorizontal: 10,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#ff7337",
    color: "#ff7337",
  },
  contentUp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  contentUpLeft: {
    flex: 8,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  contentUpRight: {
    flex: 1,
  },
  nameProduct: {
    paddingTop: 5,
  },
  rectangle: {
    width: "100%",
    height: 57,
    backgroundColor: "#fad435",
    position: "absolute",
    zIndex: 3,
    right: 0,
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 22,
    borderBottomWidth: 17,
    borderLeftWidth: 21,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    borderLeftColor: "transparent",
    position: "absolute",
    zIndex: 4,
    right: 0,
    top: 40,
  },
  textSale: {
    textAlign: "center",
    color: "red",
    fontWeight: "400",
  },
  contentCenter: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  love: {
    marginLeft: 40,
    backgroundColor: "#ee4d2d",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  price: {
    color: "#ee4d2d",
    fontSize: 18,
    fontWeight: "500",
  },
  starRate: {
    flexDirection: "row",
  },
  contentDown: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconShare: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  voucherShop: {
    paddingLeft: 15,
    paddingTop: 10,
    fontSize: 17,
    alignItems: "center",
  },
  voucher: {
    marginTop: 10,
    height: "auto",
  },
});
