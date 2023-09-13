import { View, Text, StyleSheet } from "react-native";
export default function Describe() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.contentDetails}>Chi tiết sản phẩm</Text>
        <View style={styles.contentTrademark}>
          <Text style={{ color: "gray", fontSize: 16 }}>Thương Hiệu</Text>
          <Text style={{ paddingLeft: 100, color: "blue" }}>Treseme</Text>
        </View>
        <View style={styles.contentTakeCare}>
          <Text style={{ color: "gray", fontSize: 16 }}>Chăm sóc</Text>
          <Text style={{ paddingLeft: 120, color: "blue" }}>
            Làm đẹp với Croptop
          </Text>
        </View>
        <View style={styles.contentRemaining}>
          <Text style={styles.remaining}>Sản phẩm còn lại:</Text>
          <Text style={styles.remainingQuantity}>400</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.sold}>Sản phẩm đã bán: </Text>
          <Text style={styles.quantity}>1k8</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  contentDetails: {
    fontSize: 17,
    fontWeight: "500",
    paddingTop: 10,
    textDecorationLine: "underline",
  },
  contentTrademark: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  contentTakeCare: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  contentRemaining: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  remaining: {
    color: "gray",
    fontSize: 16,
  },
  remainingQuantity: {
    paddingLeft: 65,
    color: "blue",
  },
  sold: {
    color: "gray",
    fontSize: 16,
  },
  quantity: {
    paddingLeft: 60,
    color: "blue",
  },
  details: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
