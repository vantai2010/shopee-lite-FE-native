import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
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
import fontSize from "../../utils/constant/fontSize";
import {
  changeLanguage,
  fetchRegisterThunk,
} from "../../store/slices/appSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import keyMap from "../../utils/constant/keyMap";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";

const Register = () => {
  const language = useSelector((state) => state.app.language);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   const handleDeepLink = async (url) => {
  //     if (url) {
  //       const route = url.split('://')[1]; // Lấy phần sau URI scheme
  //       if (route.startsWith('registerInformation')) {
  //         const accountId = route.split('/')[1];
  //         const languageSend = route.split('/')[2];
  //         dispatch(changeLanguage(languageSend))
  //         navigation.navigate(namePage.REGISTERINFORMATION, { accountId });
  //       }
  //     }
  //   };

  //   Linking.addEventListener('url', ({ url }) => handleDeepLink(url));
  //   return () => Linking.removeAllListeners()
  // }, [])

  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [errMess, setErrMess] = useState({
    email: "",
    password: "",
    rePassword: "",
    result: "",
  });

  const handleOnchangeText = (type, text) => {
    setInputForm({
      ...inputForm,
      [type]: text,
    });
  };

  const handleRegister = async () => {
    let { email, password, rePassword } = inputForm;
    if (!email) {
      setErrMess({
        email:
          language === keyMap.EN
            ? "Please fill out this field"
            : "Vui lòng điền trường này",
        password: "",
        rePassword: "",
        result: "",
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
        rePassword: "",
        result: "",
      });
      return;
    }
    if (!rePassword) {
      setErrMess({
        email: "",
        password: "",
        rePassword:
          language === keyMap.EN
            ? "Please fill out this field"
            : "Vui lòng điền trường này",
        result: "",
      });
      return;
    }
    // if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/.test(email)) {
    //   setErrMess({
    //     email: language === keyMap.EN ? "This field must be email" : "Trường này phải là email",
    //     password: "",
    //     rePassword: "",
    //     result: ""
    //   })
    //   return
    // }

    let response = await dispatch(fetchRegisterThunk({ ...inputForm }));
    let data = unwrapResult(response);

    if (data && data.errCode === 0) {
      navigation.navigate(namePage.REGISTER_INFORMATION, {
        accountId: data.accountId,
      });
    } else {
      setErrMess({
        email: "",
        password: "",
        rePassword: "",
        result: language === keyMap.EN ? data?.messageEN : data?.messageVI,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Đăng Ký</Text>
        <TextInput
          style={styles.input}
          placeholder="Email hoặc số điện thoại"
          value={inputForm.email}
          onChangeText={(text) => handleOnchangeText("email", text)}
        />
        {errMess.email && (
          <Text style={{ color: "red", fontSize: fontSize.h2 }}>
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
            <Text style={{ color: "red", fontSize: fontSize.h2 }}>
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
        <View style={styles.inputShow}>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại Mật khẩu"
            secureTextEntry={!showPassword}
            value={inputForm.rePassword}
            onChangeText={(text) => handleOnchangeText("rePassword", text)}
          />
          {errMess.rePassword && (
            <Text style={{ color: "red", fontSize: fontSize.h2 }}>
              {errMess.rePassword}
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
        <TouchableOpacity style={styles.forgotPassword}></TouchableOpacity>
        {errMess.result && (
          <Text style={{ color: "green", fontSize: fontSize.h2 }}>
            {errMess.result}
          </Text>
        )}
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Đăng Ký</Text>
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

export default Register;
