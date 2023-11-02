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
  Platform,
  Keyboard
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import { Colors } from "react-native/Libraries/NewAppScreen";
import color from "../../utils/constant/color";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
import { getListContentChatService, sendMessChatByUserService } from "../../service/appService";
import { useSelector } from "react-redux";
import { Toast } from "toastify-react-native"
import keyMap from "../../utils/constant/keyMap";
import environment from "../../utils/constant/environment";


export default function Mess() {
  const language = useSelector(state => state.app.language)
  const userData = useSelector(state => state.app.userData)
  const navigation = useNavigation();
  const route = useRoute()
  const contactUserId = route.params?.contactUserId
  const dataContactUser = route.params?.dataContactUser
  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };
  const [listContentChat, setListContentChat] = useState([])
  const getContentChat = async () => {
    let response = await getListContentChatService(contactUserId)
    if (response && response.errCode === 0) {
      setListContentChat(response.data)
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getContentChat()
  }, [contactUserId])

  const [text, setText] = useState("");

  const handleSendMessage = async () => {
    if (!text.trim()) {
      return
    }

    let response = await sendMessChatByUserService({
      contactUserId: contactUserId,
      content: text
    })
    if (response && response.errCode === 0) {
      getContentChat()
      setText("")
      Keyboard.dismiss();
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.icon1_header}
              onPress={() => handleNavigate(namePage.CHAT)}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.content_header}>
              <TouchableOpacity
                style={styles.image_chat}
                onPress={() => handleNavigate(namePage.AGENCY)}
              >
                <Image
                  style={styles.Image_Content}
                  source={{ uri: environment.BASE_URL_BE_IMG + dataContactUser?.image }}
                />
              </TouchableOpacity>

              <View style={styles.box_header}>
                <View style={styles.likeAndName}>
                  <View style={styles.status_header}>
                    <Text
                      style={{
                        fontSize: fontSize.h4,
                        backgroundColor: color.THEME,
                        color: "white",
                      }}
                    >
                      <TextFormatted id="mess.like" />
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.name_header}
                    onPress={() => handleNavigate(namePage.SHOP)}
                  >
                    <Text style={{ fontSize: fontSize.h2 }}>
                      {language === keyMap.EN ? `${dataContactUser.firstName} ${dataContactUser.lastName}` : `${dataContactUser.lastName} ${dataContactUser.firstName}`}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.time_header}>
                  <Text style={{ fontSize: fontSize.h3, color: "#787878" }}>
                    <TextFormatted id="mess.online" />
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.icon2_header}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.container_content}>
            <View style={styles.content}>
              {/* <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => handleNavigate(namePage.ROWINFORMATION)}
              >
                <View style={styles.header_content}>
                  <View style={styles.img_header_content}>
                    <Image
                      style={styles.img_product}
                      source="https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG"
                    />
                  </View>

                  <View style={styles.info_content}>
                    <View style={styles.code_info}>
                      <Text style={{ fontSize: fontSize.h3 }}>
                        <TextFormatted id="mess.code" />
                      </Text>
                      <Text style={{ fontSize: fontSize.h3 }}>19247312</Text>
                    </View>

                    <View style={styles.total_info}>
                      <Text style={{ fontSize: fontSize.h3 }}>
                        <TextFormatted id="mess.totalOrder" />
                      </Text>
                      <Text style={{ fontSize: fontSize.h3 }}>999.999Đ</Text>
                    </View>

                    <View style={styles.result_info}>
                      <Text style={{ color: "#fd5e32", fontSize: fontSize.h3 }}>
                        <TextFormatted id="mess.result" />
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity> */}

              {/* <View style={[styles.chat, dataChat.sender === 'send' ? styles.box_mess : styles.rebox_mess]}> */}
              {
                listContentChat.map((mess) => {
                  return (
                    <View key={mess.id} style={mess.senderId !== userData.id ? styles.chat : styles.rechat}>
                      <View style={styles.date_chat}>
                        <Text style={styles.text_date_chat}>{mess.time}</Text>
                      </View>

                      <TouchableOpacity style={styles.box_mess}>
                        <View style={styles.text_box_mess}>
                          <Text style={{ fontSize: fontSize.h2 }}>
                            {mess.content}
                          </Text>
                        </View>
                        {/* <View style={styles.date_box_mess}>
                          <Text
                            style={{ fontSize: fontSize.h3, color: "#787878" }}
                          >
                            {mess.time}
                          </Text>
                        </View> */}
                      </TouchableOpacity>
                    </View>
                  );
                })
              }


            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.footer_add}>
              <Ionicons name="add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.content_footer}>
              <View style={styles.text_footer}>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  onChangeText={(value) => setText(value)}
                  value={text}
                />

                <TouchableOpacity style={styles.icon_footer}>
                  <FontAwesome5 name="smile" size={24} color="black" />
                </TouchableOpacity>

              </View>
              <TouchableOpacity onPress={handleSendMessage}>
                <Text>Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>

          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_content: {
    backgroundColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 0.2,
    borderColor: "#ccc",
  },
  likeAndName: {
    flexDirection: "row",
    padding: 5,
  },
  icon1_header: {
    flex: 1,
    justifyContent: "center",
  },
  image_chat: {
    justifyContent: "center",

    width: 45,
    height: 45,
    borderRadius: 35,
    overflow: "hidden",
  },
  Image_Content: {
    width: "100%",
    height: "100%",
  },
  content_header: {
    flexDirection: "row",
    flex: 7,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon2_header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status_header: {
    paddingRight: 5,
    justifyContent: "center",
  },
  time_header: {
    paddingHorizontal: 5,
  },
  img_header_content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    padding: 10,
  },
  img_product: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },
  header_content: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 90,
    borderWidth: 0.2,
    borderColor: "#ccc",
    borderRadius: 20,
  },
  info_content: {
    flex: 4,
    padding: 10,
  },
  code_info: {
    paddingVertical: 3,
    flexDirection: "row",
  },
  total_info: {
    paddingVertical: 3,
    flexDirection: "row",
  },
  result_info: {
    paddingVertical: 3,
  },
  date_chat: {
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 20,
    padding: 5,
    marginVertical: 15,
  },
  text_date_chat: {
    color: "#787878",
    fontSize: fontSize.h3,
  },
  chat: {
    padding: 10,
  },
  box_mess: {
    maxWidth: "85%",
    padding: 10,
    backgroundColor: "#fff",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text_box_mess: {},
  date_box_mess: {
    alignSelf: "flex-end",
    padding: 5,
  },
  rechat: {
    padding: 10,
    alignItems: "flex-end",
  },
  rebox_mess: {
    maxWidth: "85%",
    padding: 10,
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#d7f1ee",
  },
  redate_box_mess: {
    padding: 5,
  },
  footer: {
    // bottom: 0 ,
    flexDirection: "row",
    paddingVertical: 20,
    // position: 'absolute'
  },
  text_footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 320,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 40,
    flexDirection: "row",
    borderRadius: 20,
  },
  content_footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footer_add: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "center",
  },
  icon_footer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  input: {
    flex: 4.5,
  },
});
