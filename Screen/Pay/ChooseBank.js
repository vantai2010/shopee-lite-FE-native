import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ModalNotification from "../ProductDetails/Modal/ModalNotification";
const ChooseBank = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const banks = [
    "Ngân hàng ACB",
    "Ngân hàng TPBank",
    "Ngân hàng SeABank",
    "Ngân hàng Techcombank",
    "Ngân hàng VPBank",
    "Ngân hàng VietinBank",
    "Ngân hàng VCB",
    "Ngân hàng BIDV",
    "Ngân hàng Agribank",
  ];
  const [isModalVisibleCart, setModalVisibleCart] = useState(false);
  const [notification, setNotification] = useState("");
  const handleCart = () => {
    setModalVisibleCart(!isModalVisibleCart);
    setNotification("Thêm ngân hàng thành công !");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Số Tài Khoản Ngân Hàng</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số tài khoản ngân hàng"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Chọn Ngân Hàng</Text>
      <Picker
        style={styles.input}
        selectedValue={selectedBank} // selectedBank giá trị được chọn hiện tại trong Picker
        onValueChange={(itemValue) => setSelectedBank(itemValue)} // hàm callback được gọi khi người dùng chọn một giá trị mới trong Picker
      >
        {banks.map((bank, index) => (
          <Picker.Item key={index} label={bank} value={bank} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.saveButton} onPress={handleCart}>
        <Text style={styles.buttonText}>Lưu</Text>
      </TouchableOpacity>
      <ModalNotification
        isVisible={isModalVisibleCart}
        message={notification}
        onClose={handleCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: "#ff7337",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ChooseBank;
