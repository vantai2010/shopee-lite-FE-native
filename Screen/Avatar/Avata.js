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
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
// import {Avatar} from 'react-native-elements'

export default function Avata({ avatarUrl }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const defaultAvatarUrl = "URL_Hinh_Mac_Dinh"; // Đặt URL cho ảnh mặc định

  const showAvatarModal = () => {
    setModalVisible(true);
  };

  const closeAvatarModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={showAvatarModal}>
        <Image
          source={{ uri: avatarUrl || defaultAvatarUrl }} // Sử dụng avatar mặc định nếu avatarUrl là null
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeAvatarModal}
      >
        <TouchableWithoutFeedback onPress={closeAvatarModal}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <TouchableOpacity onPress={() => null}>
              {/* Nút đóng modal */}
            </TouchableOpacity>
            <Image
              source={{ uri: avatarUrl || defaultAvatarUrl }} // Sử dụng avatar mặc định nếu avatarUrl là null
              style={{ width: 300, height: 300 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
