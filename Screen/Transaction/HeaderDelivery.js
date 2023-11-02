import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import color from "../../utils/constant/color";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
import "./Cancelled";
import "./Delivered";
import "./WaitDelivery";
import "./WaitShipping";
import "./Waiting";
import Waiting from "./Waiting";
import Delivered from "./Delivered";
import WaitDelivery from "./WaitDelivery";
import WaitShipping from "./WaitShipping";
import Cancelled from "./Cancelled";
import keyMap from "../../utils/constant/keyMap";
import BoughtProduct from "./BoughtProduct";

export default function HeaderDelivery() {
  const navigation = useNavigation();
  const route = useRoute()
  const page = route.params.page
  const [currentPage, setCurrentPage] = useState(page);

  const handleClick = (id) => {
    setCurrentPage(id);
  };


  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  const navi = [
    {
      id: keyMap.CHOXACNHAN,
      name: "Chờ xác nhận",
    },
    {
      id: keyMap.CHOLAYHANG,
      name: "Chờ lấy hàng",
    },
    {
      id: keyMap.DANGGIAO,
      name: "Đang giao",
    },
    {
      id: keyMap.DANHGIA,
      name: "Đánh giá",
    },
    {
      id: keyMap.DAMUA,
      name: "Đã mua",
    },
    // {
    //   id: keyMap.HUYDON,
    //   name: "Đã hủy",
    // },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ paddingHorizontal: 5 }}>
          <AntDesign name="left" size={24} color="#f25220" />
        </View>
        <Text style={{ fontSize: 16, paddingHorizontal: 5 }}>Đơn mua</Text>
        <View style={styles.icon}>
          <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <Ionicons name="search-outline" size={24} color="#f25220" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 5 }}
            onPress={() => handleNavigate(namePage.CHAT)}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#f25220"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.navi}
      >
        {navi.map((i) => {
          return (
            <TouchableOpacity
              style={[styles.Delivery, currentPage === i.id ? styles.bonus : null]}
              key={i.id}
              onPress={() => handleClick(i.id)}
            >
              <Text
                style={[styles.text, currentPage === i.id ? styles.bonusText : null]}
              >
                {i.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {currentPage === keyMap.CHOXACNHAN && <Waiting />}
      {currentPage === keyMap.CHOLAYHANG && <WaitDelivery />}
      {currentPage === keyMap.DANGGIAO && <WaitShipping />}
      {currentPage === keyMap.DANHGIA && <Delivered />}
      {currentPage === keyMap.DAMUA && <BoughtProduct />}
      {currentPage === keyMap.HUYDON && <Cancelled />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "auto",
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  icon: {
    flexDirection: "row",
  },
  navi: {
    flexDirection: "row",
  },
  Delivery: {
    paddingVertical: 10,
    marginHorizontal: 20,
  },

  text: {},
  bonus: {
    borderBottomColor: "#f25220",
    borderBottomWidth: 0.5,
  },
  bonusText: {
    color: "#f25220",
  },
});
