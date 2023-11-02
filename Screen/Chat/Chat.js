import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import color from "../../utils/constant/color";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
import { getListInteracChatService } from "../../service/appService";
import { Toast } from "toastify-react-native";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import environment from "../../utils/constant/environment";

export default function Chat() {
  const navigation = useNavigation();
  const language = useSelector(state => state.app.language)
  const idTime = useRef()
  const handleNavigate = (namePage, option) => {
    return navigation.navigate(namePage, option);
  };
  const [listUserChat, setListUserChat] = useState([])

  const getListUserChat = async () => {
    let response = await getListInteracChatService()
    if (response && response.errCode === 0) {
      setListUserChat(response.data)
    } else {
      Toast(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getListUserChat()
  }, [])

  const [text, setText] = useState("");

  const handleSearch = async (value) => {
    setText(value)
    if (idTime.current) {
      clearTimeout(idTime.current)
    }
    idTime.current = setTimeout(async () => {
      let response = await getListInteracChatService(value)
      if (response && response.errCode === 0) {
        setListUserChat(response.data)
      } else {
        Toast(language === keyMap.EN ? response.messageEN : response.messageVI)
      }
    }, 650)
  }

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <TouchableOpacity
            style={styles.icon_header}
            onPress={() => handleNavigate(namePage.INFORMATION)}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.text_header_container}>
            <Text style={styles.text_header}>Chat</Text>
          </View>
        </View>

        <View style={styles.content_container}>
          <View style={styles.content_search}>
            <View style={styles.box_search}>
              <EvilIcons
                name="search"
                size={22}
                color="grey"
                style={styles.searchIcon}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(value) => handleSearch(value)}
              value={text}
            />
          </View>

          <ScrollView>
            {
              listUserChat.length > 0 ?
                listUserChat.map((chat) => {
                  return (
                    <View style={styles.padding_content} key={chat.id}>
                      <TouchableOpacity
                        style={styles.content}
                        onPress={() => handleNavigate(namePage.MESS, { contactUserId: chat.id, dataContactUser: { image: chat.image, firstName: chat.firstName, lastName: chat.lastName } })}
                      >
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source={{ uri: environment.BASE_URL_BE_IMG + chat.image }} />
                        </View>
                        <View style={styles.box_content}>
                          <View style={styles.header_content}>
                            <View style={styles.name_chat}>
                              <Text style={styles.text_name_chat}>{language === keyMap.EN ? `${chat.firstName} ${chat.lastName}` : `${chat.lastName} ${chat.firstName}`}</Text>
                            </View>
                            <View style={styles.date_chat}>
                              <Text style={styles.text_date_chat}>{chat.time}</Text>
                            </View>
                          </View>
                          <View style={styles.header_content}>
                            <View style={styles.content_chat}>
                              <Text
                                style={styles.text_content_chat}
                                numberOfLines={1}
                              >
                                {chat.content}
                              </Text>
                            </View>
                            <View style={styles.number_chat}>
                              <Text style={styles.text_number_chat}>
                                {chat.quantity}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
                :
                <Text>Chưa có tương tác nào</Text>
            }
          </ScrollView>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_search: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  box_search: {
    backgroundColor: "#dcd1d1",
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchIcon: {},
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#dcd1d1",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
  },
  header_container: {
    // flex: 1,
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: "5%",
  },
  text_header_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 9,
    paddingRight: "10%",
  },
  text_header: {
    fontSize: fontSize.h1,
  },
  icon_header: {
    flex: 1,
    justifyContent: "center",
  },
  content_container: {
    flex: 7,
  },
  padding_content: {
    padding: 5,
    // backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  Image_Content: {
    width: "100%",
    height: "100%",
  },
  image_chat: {
    justifyContent: "center",

    width: 45,
    height: 45,
    borderRadius: 35,
    overflow: "hidden",
  },
  box_content: {
    flex: 1,
    borderTopWidth: 0.2,
    borderTopColor: "#f1f1f1",
  },
  header_content: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  name_chat: {},
  text_content_chat: {
    color: "#6f6f6f",
    fontSize: fontSize.h3,
    paddingVertical: 5,
  },
  text_name_chat: {
    fontWeight: "700",
    fontSize: fontSize.h2,
  },
  text_date_chat: {
    fontSize: fontSize.h3,
    color: "grey",
  },
  number_chat: {
    backgroundColor: "#fe6232",
    borderRadius: 11,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  text_number_chat: {
    fontSize: 10,
  },
  content_chat: {
    maxWidth: "85%",
  },
  date_chat: {},
});
