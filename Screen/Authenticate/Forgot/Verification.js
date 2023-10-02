import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Verification = () => {
  const navigation = useNavigation();
  const inputFocus = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const handleOTPChange = (text, index) => {
    if (text.length <= 1) {
      // kiểm tra xem người dùng đã nhập ký tự mới vào ô input hay chưa
      setOtp((prevOtp) => {
        let newOtp = [...prevOtp]; // tạo ra 1 bản sao của otp là newOtp
        newOtp[index] = text; // cập nhật phần tử tại vị trí index được truyền vào của mảng mới này thành text
        return newOtp;
      });
      if (text.length === 0 && index > 0) {
        // kiểm tra xem độ dài của text bằng 1
        // và không phải ô dầu tiên , di chuyển về ô trước đó
        inputFocus.current[index - 1].focus();
      } else if (text.length === 1 && index < 5) {
        // kiểm tra xem độ dài của text bằng 1
        //nếu ô input hiện tại không phải ô cuối cùng sẽ chuyển forcus đến ô tiếp theo
        inputFocus.current[index + 1].focus();
      }
    }
  };
  const handleConfirm = () => {
    if (otp.join("").length === 6) {
      navigation.navigate("Reset");
    } else {
      alert("Vui lòng điền đầy đủ mã xác nhận !");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nhập mã xác nhận</Text>
      <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index.toString()}
            style={styles.input}
            placeholder="-"
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleOTPChange(text, index)}
            ref={(input) => (inputFocus.current[index] = input)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.forgotButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    width: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderBottomWidth: 1,
    margin: 5,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    padding: 12,
    marginTop: 24,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  forgotButton: {
    marginTop: 10,
    backgroundColor: "#ff6f61",
    borderRadius: 4,
    width: 200,
    padding: 12,
    alignItems: "center",
  },
  forgotButtonHide: {
    marginTop: 10,
    backgroundColor: "#cccccc",
    width: 200,
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
});

export default Verification;
