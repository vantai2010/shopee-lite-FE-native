import icon1 from "../../../Image/icon1.png";
import icon2 from "../../../Image/icon2.png";
import icon3 from "../../../Image/icon3.png";
import { View, Text, StyleSheet, Image } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
export default function Transport() {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={icon1} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ paddingRight: 10 }}> Xử lý đơn hàng bởi Shopee</Text>
            <SimpleLineIcons name="question" size={12} color="gray" />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={icon2} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ paddingRight: 10, paddingLeft: 5 }}>
              Miễn phí vận chuyển
            </Text>
            <AntDesign name="infocirlceo" size={12} color="gray" />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Image source={icon3} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ paddingRight: 10, paddingLeft: 5 }}>
              Phí vận chuyển
            </Text>
            <AntDesign name="pluscircleo" size={12} color="gray" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
  },
});
