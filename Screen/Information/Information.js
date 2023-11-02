import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import colors from "../../utils/constant/color";
import fontSize from "../../utils/constant/fontSize";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Chat from "../Chat/Chat";
import UI from "./UI";
import namePage from "../../utils/constant/namePage";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotifyByIdService, getListNotifyService } from "../../service/appService";
import { Toast } from "toastify-react-native";
import keyMap, { notifyTitleId } from "../../utils/constant/keyMap";
import environment from "../../utils/constant/environment";
import { handleChangeNumberNotify } from "../../store/slices/appSlice";

export default function Information() {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.app.isLogin)
  const numberCart = useSelector(state => state.app.numberCart)
  const language = useSelector(state => state.app.language)
  const notifySocket = useSelector(state => state.app.notifySocket)
  const navigation = useNavigation();
  const [listNotify, setListNotify] = useState([])
  const getListNotify = async () => {
    let response = await getListNotifyService()
    if (response && response.errCode === 0) {
      setListNotify(response.data)
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  const notifyTitle = [
    { labelEN: "Successful delivery", labelVI: "Giao hàng thành công", value: notifyTitleId.GIAO_HANG_THANH_CONG },
    { labelEN: "Order has been confirmed", labelVI: "Đơn hàng đã được xác nhận", value: notifyTitleId.DON_HANG_DUOC_XAC_NHAN },
    { labelEN: "Order is being delivered", labelVI: "Đơn hàng đang được giao", value: notifyTitleId.DON_HANG_DANG_DUOC_GIAO },
    { labelEN: "Order was cancelled", labelVI: "Đơn hàng bị hủy", value: notifyTitleId.DON_HANG_BI_HUY },
    { labelEN: "System", labelVI: "Hệ thống", value: notifyTitleId.HE_THONG },
  ]

  useEffect(() => {
    getListNotify()
  }, [])

  useEffect(() => {
    notifySocket?.on("update-notification", () => {
      Toast.info(language === keyMap.EN ? "You have a new notification" : "Bạn có thông báo mới")
      getListNotify()
    })
  }, [notifySocket])

  const handleNavigateNotify = async (location, notifyId) => {
    let [namePage, pageType] = location.split("_")
    let response = await deleteNotifyByIdService(notifyId)
    if (response && response.errCode === 0) {
      getListNotify()
      dispatch(handleChangeNumberNotify(response.numberNotify))
      navigation.navigate(namePage, { page: pageType });
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  };



  return (
    <SafeAreaView>
      <ScrollView>
        {isLogin ? (
          <View style={styles.container}>
            <View style={styles.Header}>
              <View style={styles.Text}>
                <Text style={styles.HeaderText}>
                  <TextFormatted id="info.notification" />
                </Text>
              </View>

              <View style={styles.icon}>
                <TouchableOpacity>
                  <Feather
                    style={styles.icHeader}
                    name="shopping-cart"
                    size={24}
                    color="white"
                    onPress={() => navigation.navigate(namePage.CART)}
                  />
                  {
                    numberCart !== 0 &&
                    <View style={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "#ee4d2d",
                      alignItems: "center",
                      top: 0,
                      right: 0,
                      backgroundColor: "#ffffff",
                    }}>
                      <Text style={{ color: "#ee4d2d" }}>{numberCart}</Text>
                    </View>
                  }
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    style={styles.icHeader}
                    name="chatbox-ellipses"
                    size={24}
                    color="white"
                    onPress={() => handleNavigateNotify(namePage.CHAT)}
                  />
                  <View style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#ee4d2d",
                    alignItems: "center",
                    top: 0,
                    right: 0,
                    backgroundColor: "#ffffff",
                  }}>
                    <Text style={{ color: "#ee4d2d" }}>5</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.Noti}>
              <TouchableOpacity style={styles.all}>
                <View style={styles.icon2}>
                  <Fontisto name="shopping-sale" size={24} color="#eda500" />
                </View>
                <View style={styles.container_Noti}>
                  <Text style={styles.Text_container_Noti}>
                    <TextFormatted id="info.sale" />
                  </Text>
                  <Text style={styles.Noti_Text}>Xin chàoajksfhsjkf</Text>
                </View>

                <View style={styles.Number_Down}>
                  <View style={styles.number}>
                    <Text style={{ fontSize: 11 }}>3</Text>
                  </View>
                  <View style={styles.Icon_Noti}>
                    <AntDesign name="right" size={15} color="grey" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.all}>
                <View style={styles.icon2}>
                  <Entypo name="video-camera" size={24} color="#26aa99" />
                </View>
                <View style={styles.container_Noti}>
                  <Text style={styles.Text_container_Noti}>Live & Video</Text>
                  <Text style={styles.Noti_Text}>Xin chàoajksfhsjkf</Text>
                </View>
                <View style={styles.Number_Down}>
                  <View style={styles.number}>
                    <Text style={{ fontSize: 11 }}>3</Text>
                  </View>
                  <View style={styles.Icon_Noti}>
                    <AntDesign name="right" size={15} color="grey" />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.all}>
                <View style={styles.icon2}>
                  <MaterialIcons
                    name="attach-money"
                    size={24}
                    color="#ee4d2d"
                  />
                </View>
                <View style={styles.container_Noti}>
                  <Text style={styles.Text_container_Noti}>
                    <TextFormatted id="info.economic" />
                  </Text>
                  <Text style={styles.Noti_Text}>Xin chàoajksfhsjkf</Text>
                </View>
                <View style={styles.Number_Down}>
                  <View style={styles.number}>
                    <Text style={{ fontSize: 11 }}>3</Text>
                  </View>
                  <View style={styles.Icon_Noti}>
                    <AntDesign name="right" size={15} color="grey" />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.all}>
                <View style={styles.icon2}>
                  <Feather name="shopping-bag" size={24} color="#ee4d2d" />
                </View>
                <View style={styles.container_Noti}>
                  <Text style={styles.Text_container_Noti}>
                    <TextFormatted id="info.update" />
                  </Text>
                  <Text style={styles.Noti_Text}>Xin chàoajksfhsjkf</Text>
                </View>
                <View style={styles.Number_Down}>
                  <View style={styles.number}>
                    <Text style={{ fontSize: 11 }}>3</Text>
                  </View>
                  <View style={styles.Icon_Noti}>
                    <AntDesign name="right" size={15} color="grey" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.all}>
                <View style={styles.icon2}>
                  <AntDesign name="gift" size={24} color="#0046ab" />
                </View>
                <View style={styles.container_Noti}>
                  <Text style={styles.Text_container_Noti}>
                    <TextFormatted id="info.reward" />
                  </Text>
                  <Text style={styles.Noti_Text}>saccscsacs</Text>
                </View>
                <View style={styles.Number_Down}>
                  <View style={styles.number}>
                    <Text style={{ fontSize: 11 }}>3</Text>
                  </View>
                  <View style={styles.Icon_Noti}>
                    <AntDesign name="right" size={15} color="grey" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.Ctn_See_All}>
              <Text style={styles.Update}>
                <TextFormatted id="info.orderStatus" />
              </Text>
              <View style={styles.SeeAll}>
                <TouchableOpacity>
                  <Text style={styles.TextSeeAll}>
                    <TextFormatted id="info.readAll" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.Content_Container}>


              {listNotify.map((noti) => {
                return (
                  <TouchableOpacity key={noti.id}
                    onPress={() => handleNavigateNotify(noti.location, noti.id)}
                  >
                    <View style={styles.Content} >
                      <View style={styles.Image}>
                        <Image
                          style={styles.Image_Content}
                          source={{ uri: environment.BASE_URL_BE_IMG + noti.notifyProductData?.image[0] }}
                        />
                      </View>
                      <View style={styles.TextContent}>
                        <View style={styles.Results}>
                          <Text style={styles.Text1}>{language === keyMap.EN ? notifyTitle.find(item => item.value === noti.titleId).labelEN : notifyTitle.find(item => item.value === noti.titleId).labelVI}</Text>
                        </View>
                        <View style={styles.Info}>
                          <Text style={styles.Text2}>{language === keyMap.EN ? noti.messageEn : noti.messageVi}</Text>
                        </View>

                        <View style={styles.Time}>
                          <Text style={styles.TextTime}>{noti.time}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}


            </View>

            <StatusBar style="auto" />
          </View>
        ) : (
          <UI />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  Header: {
    backgroundColor: colors.THEME,
    flexDirection: "row",
    height: 105,
  },
  Text: {
    flex: 2,
    // justifyContent: 'center',
    marginTop: 40,
    marginLeft: 90,
    alignItems: "center",
  },
  HeaderText: {
    textAlign: "center",
    fontSize: fontSize.h1,
    color: "white",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  icHeader: {
    padding: 8,
  },
  Noti: {
    backgroundColor: "white",
    marginTop: 8,
  },
  all: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 0.5,
    borderBottomColor: "#ccc",
    borderTopColor: "white",
  },
  icon2: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container_Noti: {
    flex: 1,
    width: "100%",
  },
  number: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    justifyContent: "center",
    alignContent: "center",
    right: 0,
    backgroundColor: colors.THEME,
    borderRadius: 50,
  },
  Noti_Text: {
    color: "grey",
    fontSize: fontSize.h3,
  },
  Ctn_See_All: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text_container_Noti: {
    fontSize: fontSize.h2,
  },
  Update: {
    padding: 10,
    fontSize: fontSize.h2,
  },
  SeeAll: {
    padding: 10,
  },
  TextSeeAll: {
    fontSize: fontSize.h3,
    color: colors.THEME,
  },
  Content_Container: {
    backgroundColor: "white",
    width: "100%",
  },
  Content: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 0.5,
    borderBottomColor: "#ccc",
    borderTopColor: "white",
    backgroundColor: "rgb(254 234 237)",
  },
  Info: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  Image: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: fontSize.h2,
    paddingBottom: 5,
    paddingTop: 5,
  },
  TextContent: {
    maxWidth: "80%",
  },
  Text2: {
    fontSize: fontSize.h3,
    color: "grey",
  },
  TextTime: {
    fontSize: fontSize.h3,
    paddingBottom: 5,
    paddingTop: 5,
    color: "grey",
    opacity: 0.6,
  },
  Icon_Content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  Image_Content: {
    width: 24,
    height: 30,
    alignItems: "flex-start",
  },
  Number_Down: {
    flexDirection: "row",
  },
  Icon_Noti: {
    justifyContent: "center",
    alignContent: "flex-end",
    paddingLeft: 5,
  },
});
