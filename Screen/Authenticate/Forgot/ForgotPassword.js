import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [showColorBtn, setShowColorBtn] = useState(false);

  const navigation = useNavigation();
  const handleVerification = () => {
    navigation.navigate("Verification");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Gửi lại mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            if (text) {
              setEmailOrPhone(text), setShowColorBtn(true);
            } else {
              setShowColorBtn(false);
            }
          }}
        />
        <View style={styles.inputShow}>
          <TouchableOpacity style={styles.iconShow}></TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={!showColorBtn}
          style={showColorBtn ? styles.forgotButton : styles.forgotButtonHide}
          onPress={handleVerification}
        >
          <Text style={styles.forgotButtonText}>Tiếp theo</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Thay số điện thoại</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  content: {
    flex: 1, // Sử dụng flex để tạo khoảng trống bên dưới
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ff5b25",
    textAlign: "center",
  },
  inputShow: {},
  iconShow: {
    position: "absolute",
    top: 8,
    right: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  forgotPassword: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotButton: {
    marginTop: 10,
    backgroundColor: "#ff6f61",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  forgotButtonHide: {
    marginTop: 10,
    backgroundColor: "#cccccc",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  forgotButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  orContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  orText: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  socialButton: {
    backgroundColor: "#1777f3",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginTop: 8,
  },
  socialButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ForgotPassword;
