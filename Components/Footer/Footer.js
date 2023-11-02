import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import namePage from "../../utils/constant/namePage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getNumberNotifyService } from "../../service/appService";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Toast } from "toastify-react-native";
import keyMap from "../../utils/constant/keyMap";
import { handleChangeNumberNotify } from "../../store/slices/appSlice";
import TextFormatted from "../TextFormatted/TextFormatted";

export default function Footer() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const numberNotify = useSelector(state => state.app.numberNotify)
  const notifySocket = useSelector(state => state.app.notifySocket)
  const language = useSelector(state => state.app.language)

  const getNumberNotify = async () => {
    let response = await getNumberNotifyService()
    if (response && response.errCode === 0) {
      dispatch(handleChangeNumberNotify(response.data))
    }
  }

  useEffect(() => {
    getNumberNotify()
  }, [])


  useEffect(() => {
    const handleSocket = () => {
      Toast.info(language === keyMap.EN ? "You have a new notification" : "Bạn có thông báo mới")
      getNumberNotify()
    }
    notifySocket?.on("update-notification", handleSocket)

    return () => {
      notifySocket?.off("update-notification", handleSocket);
    };
  }, [notifySocket])

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <>
      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
          <View style={styles.Footer_Button}>
            {/* <View style={styles.positionHome}>
              <Text style={styles.textPositionHome}>9</Text>
            </View> */}
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.home" /></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.CART)}>
          <View style={styles.Footer_Button}>
            {/* <View style={styles.positionMail}>
              <Text style={styles.textPositionMail}>9</Text>
            </View> */}
            <SimpleLineIcons name="handbag" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.mall" /></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.PAY)}>
          <View style={styles.Footer_Button}>
            {/* <View style={styles.positionLive}>
              <Text style={styles.textPositionLive}>9</Text>
            </View> */}
            <MaterialIcons name="live-tv" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.live" /></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.REGISTER_INFORMATION)}>
          <View style={styles.Footer_Button}>
            {/* <View style={styles.positionVideo}>
              <Text style={styles.textPositionVideo}>9</Text>
            </View> */}
            <Feather name="video" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.video" /></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.INFORMATION)}>
          <View style={styles.Footer_Button}>
            {
              numberNotify !== 0 &&
              <View style={styles.positionNotification}>
                <Text style={styles.textPositionNotification}>{numberNotify}</Text>
              </View>
            }
            <AntDesign name="notification" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.notify" /></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate(namePage.IDENTITY)}>
          <View style={styles.Footer_Button}>
            {/* <View style={styles.positionMe}>
              <Text style={styles.textPositionMe}>9</Text>
            </View> */}
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.TextFooter}><TextFormatted id="footer.me" /></Text>
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
