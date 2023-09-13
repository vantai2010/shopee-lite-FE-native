import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function NavMenu() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.menuItem}>
          <FontAwesome name="wechat" size={30} color="red" />
          <Text style={styles.menuItemText}>Chat ngay</Text>
        </View>
        <View style={styles.menuItem}>
          <AntDesign name="shoppingcart" size={30} color="red" />
          <Text style={styles.menuItemText}>Thêm vào giỏ hàng</Text>
        </View>
        <View style={styles.buyNow}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 55,
    flexDirection: "row",
  },
  menuItem: {
    height: 80,
    flex: 1,
    paddingTop: 7,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#c6c6c6",
  },
  menuItemText: {
    fontSize: 12,
  },
  buyNow: {
    height: 80,
    flex: 1.5,
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: "red",
  },
  buyNowText: {
    fontSize: 18,
    color: "#fff",
  },
});
