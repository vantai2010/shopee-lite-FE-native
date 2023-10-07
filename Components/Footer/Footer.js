import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import namePage from "../../utils/constant/namePage";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <>
      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionHome}>
              <Text style={styles.textPositionHome}>9</Text>
            </View>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.TextFooter}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionMail}>
              <Text style={styles.textPositionMail}>9</Text>
            </View>
            <SimpleLineIcons name="handbag" size={24} color="black" />
            <Text style={styles.TextFooter}>Mall</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionLive}>
              <Text style={styles.textPositionLive}>9</Text>
            </View>
            <MaterialIcons name="live-tv" size={24} color="black" />
            <Text style={styles.TextFooter}>Live</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionVideo}>
              <Text style={styles.textPositionVideo}>9</Text>
            </View>
            <Feather name="video" size={24} color="black" />
            <Text style={styles.TextFooter}>Video</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.INFORMATION)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionNotification}>
              <Text style={styles.textPositionNotification}>9</Text>
            </View>
            <AntDesign name="notification" size={24} color="black" />
            <Text style={styles.TextFooter}>Thông báo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.IDENTITY)}>
          <View style={styles.Footer_Button}>
            <View style={styles.positionMe}>
              <Text style={styles.textPositionMe}>9</Text>
            </View>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.TextFooter}>Tôi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: 75,
    backgroundColor: "white",
    borderTopColor: "#ccc",
    borderTopWidth: 0.5,
  },
  positionHome: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 5,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionHome: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  positionMail: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 2,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionMail: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },

  positionLive: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 2,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionLive: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },

  positionVideo: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 2,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionVideo: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },

  positionNotification: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 12,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionNotification: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },

  positionMe: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 2,
    right: 2,
    backgroundColor: "#f25220",
    zIndex: 2,
  },
  textPositionMe: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  Footer_Button: {
    padding: 8,
    alignItems: "center",
  },
  TextFooter: {
    fontSize: 8,
    textAlign: "center",
    padding: 3,
  },
});
