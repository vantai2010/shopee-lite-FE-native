import React from "react";
import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import ModalProduct from "../Modal/ModalProduct";
import ModalNotification from "../Modal/ModalNotification";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../../utils/constant/namePage";

export default function NavMenu() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleCart, setModalVisibleCart] = useState(false);
  const [notification, setNotification] = useState("");

  const handleBuy = () => {
    setModalVisible(!isModalVisible);
  };
  const handleCart = () => {
    setModalVisibleCart(!isModalVisibleCart);
    setNotification("Thêm vào giỏ hàng thành công !");
  };
  const handleMess = () => {
    navigation.navigate(namePage.MESS);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuItem} onPress={handleMess}>
          <FontAwesome name="wechat" size={30} color="red" />
          <Text style={styles.menuItemText}>Chat ngay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCart} style={styles.menuItem}>
          <AntDesign name="shoppingcart" size={30} color="red" />
          <Text style={styles.menuItemText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNow} onPress={handleBuy}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </TouchableOpacity>
        <ModalProduct isVisible={isModalVisible} onClose={handleBuy} />
        <ModalNotification
          isVisible={isModalVisibleCart}
          message={notification}
          onClose={handleCart}
        />
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
