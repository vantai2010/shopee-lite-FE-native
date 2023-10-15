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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Chat from "../Chat/Chat";
import UI from "./UI";
import namePage from "../../utils/constant/namePage";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

const item = [
  {
    id: 0,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
  {
    id: 1,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
  {
    id: 2,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
  {
    id: 3,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
  {
    id: 4,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
  {
    id: 5,
    image:
      "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg",
    title: "Giao hàng thành công",
    discription:
      "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
    date: "Hom qua luc 16:14",
  },
];

export default function Information() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  const [isLogin, setIsLogin] = useState(true);
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
                  <FontAwesome5
                    style={styles.icHeader}
                    name="shopping-cart"
                    size={24}
                    color="white"
                    onPress={() => handleNavigate(namePage.CART)}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    style={styles.icHeader}
                    name="chatbox-ellipses"
                    size={24}
                    color="white"
                    onPress={() => handleNavigate(namePage.CHAT)}
                  />
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
              {item.map((noti) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleNavigate(namePage.ROWINFORMATION)}
                  >
                    <View style={styles.Content} key={noti.id}>
                      <View style={styles.Image}>
                        <Image
                          style={styles.Image_Content}
                          source={noti.image}
                        />
                      </View>
                      <View style={styles.TextContent}>
                        <View style={styles.Results}>
                          <Text style={styles.Text1}>{noti.title}</Text>
                        </View>
                        <View style={styles.Info}>
                          <Text style={styles.Text2}>{noti.discription}</Text>
                        </View>

                        <View style={styles.Time}>
                          <Text style={styles.TextTime}>{noti.date}</Text>
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
