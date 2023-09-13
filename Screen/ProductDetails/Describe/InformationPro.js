import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfromationPro() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mô tả chi tiết sản phẩm</Text>
        <Text style={styles.description}>
          Công thức ưu việt CHUẨN SALON được đặc chế với dưỡng chất Hydrolyzed
          Keratin thấm sâu qua 10 lớp Keratin cho tới tận lõi tóc, giúp nuôi
          dưỡng & phục hồi tóc Thành phần an toàn, không gây hại cho mái tóc và
          da đầu. Được các chuyên gia tạo mẫu tóc tin dùng để chăm sóc và dưỡng
          tóc Khuyên dùng trọn bộ gội xả TRESmmé Keratin Smooth để có 1 trải
          nghiệm hoàn mỹ
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
