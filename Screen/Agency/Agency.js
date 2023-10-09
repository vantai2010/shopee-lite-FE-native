import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import fontSize from "../../utils/constant/fontSize";
import Vi from "../../utils/language/vi";
import bg7 from "../../Image/background11.png";
const productsData = [
  { id: "1", name: "Sản phẩm 1", price: 100, status: "Đang giao" },
  { id: "2", name: "Sản phẩm 3", price: 200, status: "Đang chờ xác nhận" },
  { id: "3", name: "Sản phẩm 2", price: 150, status: "Đã giao" },
  { id: "4", name: "Sản phẩm 3", price: 200, status: "Đang chờ xác nhận" },
];

const Agency = () => {
  const [showDetails, setShowDetails] = useState(null);
  const handleClose = () => {};
  const handleCheck = () => {};
  const handleShowDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Đang giao":
        return "#ff7337";
      case "Đã giao":
        return "green";
      case "Đang chờ xác nhận":
        return "red";
      default:
        return "black";
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.content}>
      <View style={styles.item}>
        <TouchableOpacity
          style={{ width: "80%" }}
          onPress={() => handleShowDetails(item.id)}
        >
          <Text>{item.name}</Text>
          <Text>Giá: ${item.price}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>Trạng thái: </Text>
            <Text
              style={{
                backgroundColor: getStatusColor(item.status),
                fontSize: fontSize.h5,
                fontWeight: "600",
                color: "#ffffff",
                paddingHorizontal: 5,
                borderRadius: 5,
              }}
            >
              {item.status}
            </Text>
          </View>
        </TouchableOpacity>
        {item.status === "Đang chờ xác nhận" && (
          <View style={styles.checkButton}>
            <TouchableOpacity
              onPress={handleCheck}
              style={{
                borderRadius: 5,
                backgroundColor: "green",
              }}
            >
              <AntDesign name="check" size={30} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClose}
              style={{
                marginTop: 5,
                borderRadius: 5,
                backgroundColor: "red",
              }}
            >
              <AntDesign name="close" size={30} color="#ffffff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {showDetails === item.id && (
        <View
          style={{
            backgroundColor: "#f8d7c0",
            paddingLeft: 10,
            paddingVertical: 5,
          }}
        >
          <Text>Chi tiết đơn hàng</Text>
          <Text>Số lượng: 1</Text>
          <Text>Địa chỉ giao hàng: </Text>
          <Text>Đơn vị giao hàng</Text>
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
            Shop: ahamovi
          </Text>
          <Text style={{ color: "green", fontWeight: "500" }}>
            Đang hoạt động
          </Text>
        </View>
      </View>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.buttonText}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  content: {
    paddingVertical: 10,
    flexDirection: "colum",
    justifyContent: "space-between",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderButton: {
    backgroundColor: "#ff7337",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Agency;
