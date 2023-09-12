import { View, TextInput, StyleSheet, Text } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
} from "@expo/vector-icons";
export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentLeft}>
          <EvilIcons
            name="search"
            style={styles.iconSearch}
            size={24}
            color="#8793ab"
          />
          <TextInput
            style={styles.input}
            placeholder="Shopee Mall"
            placeholderTextColor="#ee2c4a"
          />
          <MaterialCommunityIcons
            name="camera-enhance-outline"
            size={24}
            style={styles.iconCamera}
            color="#8793ab"
          />
        </View>
        <View style={styles.contentRight}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color="#ffffff"
          />
          <View style={styles.Notification}>
            <Text style={{ textAlign: "center", fontSize: 11, color: "#fff" }}>
              12
            </Text>
          </View>
          <AntDesign name="message1" size={24} color="#ffffff" />
          <View style={styles.NotificationMess}>
            <Text style={{ textAlign: "center", fontSize: 11, color: "#fff" }}>
              9
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    backgroundColor: "#ee4d2d",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Notification: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    bottom: 10,
    right: 40,
    backgroundColor: "#ee4d2d",
  },
  NotificationMess: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    bottom: 10,
    right: 0,
    backgroundColor: "#ee4d2d",
  },
  contentLeft: {
    flex: 4,
    paddingLeft: 10,
  },
  input: {
    paddingLeft: 40,
    position: "relative",
    marginTop: 40,
    height: 40,
    backgroundColor: "#fff",
    fontWeight: "500",
    fontSize: 16,
    borderRadius: 2,
  },
  iconSearch: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  iconCamera: {
    position: "absolute",
    top: 48,
    right: 20,
  },
  //   hmmm
  contentRight: {
    // marginLeft: 10,
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
