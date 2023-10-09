import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import bg7 from "../../Image/background11.png";
import fontSize from "../../utils/constant/fontSize";

const ordersData = [
  { id: 1, orderNumber: "SHOPEE123", status: "Đang Giao Hàng" },
  { id: 2, orderNumber: "SHOPEE456", status: "Đã Giao Hàng" },
  // Thêm các đơn hàng khác vào đây
];

const Shipper = () => {
  const [showOrder, setShowOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Đang Giao Hàng":
        return "red";
      case "Đã Giao Hàng":
        return "green";
      default:
        return "black";
    }
  };

  const handleShowOrder = (id) => {
    setShowOrder(showOrder === id ? null : id);
  };
  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.content}>
        <TouchableOpacity
          style={{ width: "80%" }}
          onPress={() => handleShowOrder(item.id)}
        >
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text
            style={{
              color: getStatusColor(item.status),
              fontSize: fontSize.h5,
              fontWeight: "600",
              paddingHorizontal: 5,
              borderRadius: 5,
            }}
          >
            {item.status}
          </Text>
        </TouchableOpacity>
        {item.status === "Đang Giao Hàng" && (
          <TouchableOpacity
            style={{ backgroundColor: "green", borderRadius: 5 }}
          >
            <AntDesign name="check" size={30} color="#ffffff" />
          </TouchableOpacity>
        )}
      </View>
      {showOrder === item.id && (
        <View
          style={{
            backgroundColor: "#f8d7c0",
            paddingLeft: 10,
            paddingVertical: 5,
          }}
        >
          <Text>Chi tiết đơn hàng</Text>
          <Text>Số lượng: 1</Text>
          <Text>Người nhận: </Text>
          <Text>Địa chỉ giao hàng: </Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={bg7}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: fontSize.h2, fontWeight: "600" }}>
            Shipper: Tran Van Thuan
          </Text>
          <Text style={{ color: "green", fontWeight: "500" }}>
            Đang hoạt động
          </Text>
        </View>
      </View>
      <Text style={styles.header}>Danh Sách Đơn Hàng Shopee</Text>
      <FlatList
        data={ordersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingBottom: 5,
  },
  header: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
    color: "#ff7337",
    marginBottom: 20,
  },
  orderItem: {
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    fontSize: 16,
    color: "#555",
  },
});

export default Shipper;
