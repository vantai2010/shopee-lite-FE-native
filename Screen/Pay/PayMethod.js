import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import fontSize from "../../utils/constant/fontSize";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
const PayMethod = () => {
  const navigation = useNavigation();
  const [showPay, setShowPay] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showCheckPay, setShowCheckPay] = useState(false);
  const [showPayHome, setShowPayHome] = useState(false);
  const [colorBtn, setColorBtn] = useState(false);

  const handleAgree = () => {
    if (showCheckPay || showPayHome) {
      setColorBtn(true);
    }
  };

  const handleAddBank = () => {
    navigation.navigate(namePage.CHOOSEBANK);
  };

  useEffect(() => {
    if (showPayHome) {
      setShowCheck(false);
      setShowCheckPay(false);
    }
  }, [showPayHome]);
  useEffect(() => {
    if (showPayHome || showCheckPay) {
      setColorBtn(true);
    } else {
      setColorBtn(false);
    }
  }, [showPayHome, showCheckPay]);
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
            Thẻ tín dụng
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
            <TouchableOpacity
              onPress={() => {
                setShowCheck(!showCheck), setShowCheckPay(!showCheckPay);
              }}
              style={styles.namePay}
            >
              <Text>VCB 0123456789191</Text>
              {showCheck && (
                <AntDesign name="check" size={24} color="#ff7337" />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.addPay} onPress={handleAddBank}>
              <View style={styles.add}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </View>
              <Text style={{ paddingLeft: 10, fontSize: fontSize.h2 }}>
                Thêm thẻ tín dụng mới
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setShowPayHome(!showPayHome);
          }}
          style={styles.bankPay}
        >
          <Text
            style={{ fontSize: fontSize.h2, color: "red", fontWeight: "600" }}
          >
            Thanh toán khi nhận được hàng
          </Text>
          {showPayHome && <AntDesign name="check" size={24} color="#ff7337" />}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!colorBtn}
          onPress={handleAgree}
          style={colorBtn ? styles.confirmOn : styles.confirmOff}
        >
          <Text style={{ color: "#ffffff", fontSize: fontSize.h2 }}>
            Đồng ý
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
});
