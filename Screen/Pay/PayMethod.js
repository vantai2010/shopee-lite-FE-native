import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import fontSize from "../../utils/constant/fontSize";
import { useNavigation, useRoute } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
import {
  getBanksForUserService,
  verifyPassBankForUserService,
} from "../../service/appService";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
const PayMethod = () => {
  const language = useSelector((state) => state.app.language);
  const navigation = useNavigation();
  const route = useRoute();
  const dataNavSend = route.params;
  const [showPay, setShowPay] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showCheckPay, setShowCheckPay] = useState(false);
  const [showPayHome, setShowPayHome] = useState(false);
  const [colorBtn, setColorBtn] = useState(false);
  const [listBanks, setListBanks] = useState([]);
  const [bankSelected, setBankSelected] = useState();
  const [passVerify, setPassVerify] = useState();

  const getListBanks = async () => {
    let response = await getBanksForUserService();
    if (response && response.errCode === 0) {
      setListBanks(response.data);
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI);
    }
  };

  const handleAgree = async () => {
    if (!showPayHome && !bankSelected) {
      return alert(
        language === keyMap.EN
          ? "Please select method"
          : "Vui lòng chọn phương thức"
      );
    }
    if (showPayHome && !bankSelected) {
      dataNavSend.setMethodPay({
        nameEN: "Wait for the goods when paying",
        nameVI: "Chờ lấy hàng khi thanh toán",
        value: keyMap.CHOXACNHAN_CHUATHANHTOAN,
      });
      return navigation.goBack();
    }
    if (bankSelected && !passVerify) {
      return alert(
        language === keyMap.EN
          ? "Please enter the confirmation code"
          : "Vui lòng nhập mã xác nhận"
      );
    }
    let response = await verifyPassBankForUserService({
      passVerify: passVerify,
      bankId: bankSelected.id,
    });
    if (response && response.errCode === 0) {
      dataNavSend.setMethodPay({
        nameEN: "Online payment",
        nameVI: "Thanh toán online",
        value: keyMap.CHOXACNHAN_DATHANHTOAN,
      });
      return navigation.goBack();
    } else {
      return alert(
        language === keyMap.EN ? response.messageEN : response.messageVI
      );
    }
  };

  const handleAddBank = () => {
    navigation.navigate(namePage.CHOOSEBANK);
  };

  // useEffect(() => {
  //   if (showPayHome) {
  //     setShowCheck(false);
  //     setShowCheckPay(false);
  //   }
  // }, [showPayHome]);

  // useEffect(() => {
  //   if (showPayHome || showCheckPay) {
  //     setColorBtn(true);
  //   } else {
  //     setColorBtn(false);
  //   }
  // }, [showPayHome, showCheckPay]);

  useEffect(() => {
    getListBanks();
  }, []);

  const handleSelectBank = (item) => {
    setBankSelected(item);
    setShowPayHome(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setShowPay(!showPay)}
          style={styles.bankPay}
        >
          <Text
            style={{ fontSize: fontSize.h2, color: "red", fontWeight: "600" }}
          >
            <TextFormatted id="pay.credit" />
          </Text>
          <View style={{ flexDirection: "row" }}>
            {showCheckPay && showCheck && (
              <AntDesign
                style={{ paddingRight: 5 }}
                name="checkcircle"
                size={24}
                color="#ff7337"
              />
            )}
            <AntDesign name="down" size={24} color="red" />
          </View>
        </TouchableOpacity>
        {showPay && (
          <View style={styles.showPay}>
            {listBanks &&
              listBanks.map((item) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        handleSelectBank(item);
                      }}
                      style={styles.namePay}
                    >
                      <Text>
                        {item.nameBank} {item.numberBank}
                      </Text>
                      {bankSelected?.id === item.id && (
                        <AntDesign name="check" size={24} color="#ff7337" />
                      )}
                    </TouchableOpacity>
                    {bankSelected?.id === item.id && (
                      <TextInput
                        style={styles.input}
                        placeholder="Nhập mã xác nhận"
                        onChangeText={(text) => setPassVerify(text)}
                      />
                    )}
                  </>
                );
              })}

            <TouchableOpacity style={styles.addPay} onPress={handleAddBank}>
              <View style={styles.add}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </View>
              <Text style={{ paddingLeft: 10, fontSize: fontSize.h2 }}>
                <TextFormatted id="pay.addcredit" />
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            setShowPayHome(!showPayHome);
            setBankSelected(null);
          }}
          style={styles.bankPay}
        >
          <Text
            style={{ fontSize: fontSize.h2, color: "red", fontWeight: "600" }}
          >
            <TextFormatted id="pay.receipt" />
          </Text>
          {showPayHome && <AntDesign name="check" size={24} color="#ff7337" />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAgree}
          style={
            showPayHome || bankSelected ? styles.confirmOn : styles.confirmOff
          }
        >
          <Text style={{ color: "#ffffff", fontSize: fontSize.h2 }}>
            <TextFormatted id="pay.confirm" />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default PayMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  bankPay: {
    paddingTop: 10,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showPay: {
    paddingTop: 20,
    width: "100%",
  },
  addPay: {
    paddingTop: 10,
    flexDirection: "row",
    paddingBottom: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  add: {
    borderWidth: 1,
    borderStyle: "dashed",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  namePay: {
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 20,
    fontSize: fontSize.h2,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirmOn: {
    marginTop: 200,
    width: "90%",
    padding: 10,
    backgroundColor: "#ff7337",
    alignItems: "center",
    color: "#ffffff",
  },
  confirmOff: {
    marginTop: 200,
    width: "90%",
    padding: 10,
    backgroundColor: "#cccccc",
    alignItems: "center",
    color: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
});
