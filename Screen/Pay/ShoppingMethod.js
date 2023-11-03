import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TextFormatted from "../../Components/TextFormatted/TextFormatted";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import calDistanceAddress from "../../utils/calDistanceAddress";

export default function ShoppingMethod() {
  const route = useRoute();
  const dataNaviagteSend = route.params;
  const [check, setCheck] = useState(null);
  const navigation = useNavigation();

  const [shipFastMethod, setShipFastMethod] = useState({
    id: 0,
    method: "Nhanh",
    cost: 0,
    date: "20 Thg 10 - 24 Th 10",
  });

  const [shipFlashMethod, setShipFlashMethod] = useState({
    id: 1,
    method: "Thần tốc",
    cost: 0,
    date: "20 Thg 10 - 24 Th 10",
  });

  useEffect(() => {
    const cal = async () => {
      let distance = await calDistanceAddress(
        dataNaviagteSend.addressUser,
        dataNaviagteSend.addressShop
      );
      return distance;
    };

    cal().then((distance) => {
      if (distance < 10) {
        setShipFastMethod({
          ...shipFastMethod,
          cost: 12000,
        });
        setShipFlashMethod({
          ...shipFlashMethod,
          cost: 24000,
        });
      } else if (distance > 10 && distance < 50) {
        setShipFastMethod({
          ...shipFastMethod,
          cost: 20000,
        });
        setShipFlashMethod({
          ...shipFlashMethod,
          cost: 40000,
        });
      } else if (distance > 50 && distance < 300) {
        setShipFastMethod({
          ...shipFastMethod,
          cost: 35000,
        });
        setShipFlashMethod({
          ...shipFlashMethod,
          cost: 70000,
        });
      } else if (distance > 300 && distance < 800) {
        setShipFastMethod({
          ...shipFastMethod,
          cost: 45000,
        });
        setShipFlashMethod({
          ...shipFlashMethod,
          cost: 90000,
        });
      } else if (distance > 800) {
        setShipFastMethod({
          ...shipFastMethod,
          cost: 45000,
        });
        setShipFlashMethod({
          ...shipFlashMethod,
          cost: 90000,
        });
      }
    });
  }, [dataNaviagteSend]);

  const handleCheck = (item) => {
    setCheck(item.id);
    dataNaviagteSend.setShipMethod(item);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <View style={styles.HeaderIcon}>
            <AntDesign name="left" size={22} color="#ee4d2d" />
          </View>
          <View style={styles.HeaderDis}>
            <Text style={styles.HeaderDisText} numberOfLines={1}>
              <TextFormatted id="pay.shipping" />
            </Text>
          </View>
        </View>
        <View style={styles.Description}>
          <View style={styles.boxMethod}>
            <View style={styles.Method}>
              <Text style={{ fontSize: 12, color: "grey" }}>
                <TextFormatted id="pay.shopee" />
              </Text>
            </View>
            <View style={styles.MethodIcon}>
              <FontAwesome5 name="shield-alt" size={15} color="#ee4d2d" />
            </View>
          </View>
          <View style={styles.ContentMethod}>
            <Text style={{ fontSize: 12 }}>
              <TextFormatted id="pay.content" />
            </Text>
          </View>
        </View>
        <View style={styles.Content}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              borderLeftWidth: 10,
              borderLeftColor: "#ee4d2d",
              borderBottomWidth: 1,
              borderBottomColor: "grey",
            }}
            onPress={() =>
              shipFastMethod.cost === 0 ? null : handleCheck(shipFastMethod)
            }
          >
            <View style={styles.Fast}>
              <View style={styles.FastCost}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontSize: 13,
                    fontWeight: "700",
                  }}
                >
                  {shipFastMethod.method}
                </Text>
                <Text
                  style={{
                    color: "#ee4d2d",
                    paddingVertical: 5,
                    fontSize: 13,
                  }}
                >
                  {shipFastMethod.cost} đ
                </Text>
              </View>
              <View style={styles.dateReceive}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontSize: 13,
                    color: "grey",
                  }}
                >
                  <TextFormatted id="pay.good" /> {shipFastMethod.date}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
              {check === shipFastMethod.id && (
                <AntDesign name="check" size={24} color="#ee4d2d" />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              borderLeftWidth: 10,
              borderLeftColor: "#ee4d2d",
              borderBottomWidth: 1,
              borderBottomColor: "grey",
            }}
            onPress={() =>
              shipFlashMethod.cost === 0 ? null : handleCheck(shipFlashMethod)
            }
          >
            <View style={styles.Fast}>
              <View style={styles.FastCost}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontSize: 13,
                    fontWeight: "700",
                  }}
                >
                  {shipFlashMethod.method}
                </Text>
                <Text
                  style={{
                    color: "#ee4d2d",
                    paddingVertical: 5,
                    fontSize: 13,
                  }}
                >
                  {shipFlashMethod.cost} đ
                </Text>
              </View>
              <View style={styles.dateReceive}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontSize: 13,
                    color: "grey",
                  }}
                >
                  <TextFormatted id="pay.good" /> {shipFlashMethod.date}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
              {check === shipFlashMethod.id && (
                <AntDesign name="check" size={24} color="#ee4d2d" />
              )}
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.Footer}>
                    <TouchableOpacity style={styles.btnFooter}>
                        <Text>Xác nhận</Text>
                    </TouchableOpacity>
                </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
  },
  Header: {
    height: "10%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  HeaderIcon: {
    flex: 1,

    paddingHorizontal: 5,
    justifyContent: "center",
  },
  HeaderDis: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  HeaderDisText: {
    fontSize: 18,
  },
  Description: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  boxMethod: {
    flexDirection: "row",
    padding: 5,
  },
  Method: {},
  MethodIcon: {},
  ContentMethod: {
    paddingHorizontal: 5,
    width: "100%",
  },
  Content: {
    height: "auto",
    backgroundColor: "white",
  },
  Fast: {},
  FastCost: {
    flexDirection: "row",
  },
  Footer: {
    backgroundColor: "white",
    height: "7%",
    top: "32%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnFooter: {
    backgroundColor: "#ee4d2d",
    height: "70%",
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
