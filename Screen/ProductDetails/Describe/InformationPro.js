import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfromationPro({ product }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mô tả chi tiết sản phẩm</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    paddingTop: 10,
    textDecorationLine: "underline",
  },
  description: {
    paddingTop: 5,
    lineHeight: 25,
  },
});
