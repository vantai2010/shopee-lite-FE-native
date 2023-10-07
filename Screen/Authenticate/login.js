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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Email hoặc số điện thoại"
        />
        <View style={styles.inputShow}>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.iconShow}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={23}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text>Bạn chưa có tài khoản?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.orLine}></View>
          <Text style={styles.orText}>HOẶC</Text>
          <View style={styles.orLine}></View>
        </View>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Đăng nhập bằng Google</Text>
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
  inputShow: {},
  iconShow: {
    position: "absolute",
    top: 8,
    right: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  forgotPassword: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
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

export default LoginScreen;
