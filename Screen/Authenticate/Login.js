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
import { useDispatch, useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import { fetchLoginThunk } from "../../store/slices/appSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import namePage from "../../utils/constant/namePage";

import fontSize from "../../utils/constant/fontSize";

const LoginScreen = () => {
  const language = useSelector((state) => state.app.language);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const [errMess, setErrMess] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnchangeText = (type, text) => {
    setInputForm({
      ...inputForm,
      [type]: text,
    });
  };

  const handleLogin = () => {
    let { email, password } = inputForm;
    if (!email) {
      setErrMess({
        email:
          language === keyMap.EN
            ? "Please fill out this field"
            : "Vui lòng điền trường này",
        password: "",
      });
      return;
    }
    if (!password) {
      setErrMess({
        email: "",
        password:
          language === keyMap.EN
            ? "Please fill out this field"
            : "Vui lòng điền trường này",
      });
      return;
    }
    // if (
    //   /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/.test(
    //     email
    //   )
    // ) {
    //   setErrMess({
    //     email:
    //       language === keyMap.EN
    //         ? "This field must be email"
    //         : "Trường này phải là email",
    //     password: "",
    //   });
    //   return;
    // }

    let response = dispatch(fetchLoginThunk({ email, password }));
    let data = unwrapResult(response);
    if (data && data.errCode === 0) {
      navigation.navigate(namePage.HOME);
    } else {
      setErrMess({
        email: "",
        password:
          language === keyMap.EN
            ? "There was an error during the login process"
            : "Có lỗi trong quá trình đăng nhập",
      });
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate(namePage.FORGOT_PASSWORD);
  };
  const handleCreateAccount = () => {
    navigation.navigate(namePage.REGISTER);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          value={inputForm.email}
          onChangeText={(text) => handleOnchangeText("email", text)}
          placeholder="Email hoặc số điện thoại"
        />
        {errMess.email && (
          <Text style={{ color: "red", fontSize: fontSize.h3 }}>
            {errMess.email}
          </Text>
        )}
        <View style={styles.inputShow}>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={!showPassword}
            value={inputForm.password}
            onChangeText={(text) => handleOnchangeText("password", text)}
          />
          {errMess.password && (
            <Text style={{ color: "red", fontSize: fontSize.h3 }}>
              {errMess.password}
            </Text>
          )}
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
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text>Bạn chưa có tài khoản?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
