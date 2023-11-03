import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ModalNotification from "../ProductDetails/Modal/ModalNotification";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import { createBankForUserService } from "../../service/appService";
import { useNavigation } from "@react-navigation/native";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
const ChooseBank = () => {
  const navigation = useNavigation();
  const language = useSelector((state) => state.app.language);
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const [rePassVerify, setRePassVerify] = useState("");
  const [errMess, setErrMess] = useState({
    accountNumber: "",
    selectedBank: "",
    passVerify: "",
    rePassVerify: "",
    result: "",
  });
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

  const handleCreateBank = async () => {
    if (!accountNumber) {
      setErrMess({
        accountNumber:
          language === keyMap.EN
            ? "Please enter this field"
            : "Vui lòng nhập trường này",
        selectedBank: "",
        passVerify: "",
        rePassVerify: "",
        result: "",
      });
      return;
    }
    if (!passVerify) {
      setErrMess({
        accountNumber: "",
        selectedBank: "",
        passVerify:
          language === keyMap.EN
            ? "Please enter this field"
            : "Vui lòng nhập trường này",
        rePassVerify: "",
        result: "",
      });
      return;
    }
    if (!rePassVerify) {
      setErrMess({
        accountNumber: "",
        selectedBank: "",
        passVerify: "",
        rePassVerify:
          language === keyMap.EN
            ? "Please enter this field"
            : "Vui lòng nhập trường này",
        result: "",
      });
      return;
    }
    if (!selectedBank) {
      setErrMess({
        accountNumber: "",
        selectedBank:
          language === keyMap.EN
            ? "Please enter this field"
            : "Vui lòng nhập trường này",
        passVerify: "",
        rePassVerify: "",
        result: "",
      });
      return;
    }
    if (isNaN(accountNumber)) {
      setErrMess({
        accountNumber:
          language === keyMap.EN
            ? "This field is numberic"
            : "Trường này phải là số",
        selectedBank: "",
        passVerify: "",
        rePassVerify: "",
        result: "",
      });
      return;
    }
    if (!(accountNumber % 1 === 0)) {
      setErrMess({
        accountNumber:
          language === keyMap.EN
            ? "This field is integer"
            : "Trường này phải là số nguyên",
        selectedBank: "",
        passVerify: "",
        rePassVerify: "",
        result: "",
      });
      return;
    }
    if (passVerify !== rePassVerify) {
      if (isNaN(accountNumber)) {
        setErrMess({
          accountNumber: "",
          selectedBank: "",
          passVerify: "",
          rePassVerify:
            language === keyMap.EN
              ? "The code entered is incorrect"
              : "Mã nhập lại không chính xác",
          result: "",
        });
        return;
      }
    }

    let response = await createBankForUserService({
      numberBank: accountNumber,
      nameBank: selectedBank,
      passVerify: passVerify,
    });
    if (response && response.errCode === 0) {
      navigation.goBack();
    } else {
      setErrMess({
        accountNumber: "",
        selectedBank: "",
        passVerify: "",
        rePassVerify: "",
        result:
          language === keyMap.EN ? response.messageEN : response.messageVI,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <TextFormatted id="pay.bank" />
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số tài khoản ngân hàng"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errMess.accountNumber}</Text>

      <Text style={styles.label}>
        <TextFormatted id="pay.select" />
      </Text>
      <Picker
        style={styles.input}
        selectedValue={selectedBank} // selectedBank giá trị được chọn hiện tại trong Picker
        onValueChange={(itemValue) => setSelectedBank(itemValue)} // hàm callback được gọi khi người dùng chọn một giá trị mới trong Picker
      >
        {banks.map((bank, index) => (
          <Picker.Item key={index} label={bank} value={bank} />
        ))}
      </Picker>
      <Text style={{ color: "red" }}>{errMess.selectedBank}</Text>

      <Text style={styles.label}>
        <TextFormatted id="pay.verification" />
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mã xác nhận"
        value={passVerify}
        onChangeText={(text) => setPassVerify(text)}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errMess.passVerify}</Text>

      <Text style={styles.label}>
        <TextFormatted id="pay.renter" />
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mã xác nhận"
        value={rePassVerify}
        onChangeText={(text) => setRePassVerify(text)}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errMess.rePassVerify}</Text>

      <View style={{ height: 150 }}></View>

      <TouchableOpacity style={styles.saveButton} onPress={handleCreateBank}>
        <Text style={styles.buttonText}>
          <TextFormatted id="pay.save" />
        </Text>
      </TouchableOpacity>
      {/* <ModalNotification
        isVisible={isModalVisibleCart}
        message={notification}
        onClose={handleCart}
      /> */}
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
