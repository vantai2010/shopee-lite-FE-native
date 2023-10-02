import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
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
const ResetPassword = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState(false);
  const [againPassword, setAgainPassword] = useState("");

  const togglePasswordVisibility = (type) => {
    if (type === "newPassword") {
      setShowPassword(!showPassword);
    } else {
      setRetypePassword(!retypePassword);
    }
  };

  const handleConfirm = () => {
    if (password === againPassword) {
      navigation.navigate("Login");
      alert("Thành công !");
    } else {
      alert("Thất bại !");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Đặt lại mật khẩu</Text>
        <View style={styles.inputShow}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu mới..."
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.iconShow}
            onPress={() => togglePasswordVisibility("newPassword")}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={23}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputShow}>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu..."
            secureTextEntry={!retypePassword}
            value={againPassword}
            onChangeText={(text) => setAgainPassword(text)}
          />
          <TouchableOpacity
            style={styles.iconShow}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={retypePassword ? "eye" : "eye-off"}
              size={23}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleConfirm}>
          <Text style={styles.loginButtonText}>Xác nhận</Text>
        </TouchableOpacity>
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
  inputShow: {
    marginTop: 10,
  },
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
  loginButton: {
    marginTop: 10,
    backgroundColor: "#ff6f61",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 8,
  },
  orText: {
    fontWeight: "bold",
    color: "gray",
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

export default ResetPassword;
