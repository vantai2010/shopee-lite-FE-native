import { Text, View, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
export default function MenuList() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentLeft}>
          <View style={styles.iconBack}>
            <AntDesign name="back" size={13} color="#ffffff" />
          </View>
          <Text style={styles.textLeft}>Miễn phí trả hàng</Text>
        </View>
        <View style={styles.contentCenter}>
          <View style={styles.iconShield}>
            <Ionicons
              name="ios-shield-checkmark-outline"
              size={13}
              color="#ffffff"
            />
          </View>
          <Text style={styles.textCenter}>Chính hãng 100%</Text>
        </View>
        <View style={styles.contentRight}>
          <View style={styles.iconCart}>
            <Ionicons name="ios-cart-outline" size={13} color="#ffffff" />
          </View>
          <Text style={styles.textRight}>Giao hàng miễn phí</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    marginTop: 10,
    width: "100%",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentLeft: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textLeft: {
    fontSize: 10,
    marginLeft: 8,
    color: "black",
    fontWeight: "400",
  },
  iconBack: {
    width: 17,
    height: 17,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  contentCenter: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textCenter: {
    fontSize: 10,
    marginLeft: 8,
    color: "black",
    fontWeight: "400",
  },
  iconShield: {
    width: 17,
    height: 17,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  contentRight: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textRight: {
    fontSize: 10,
    marginLeft: 8,
    color: "black",
    fontWeight: "400",
  },
  iconCart: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 17,
    height: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
