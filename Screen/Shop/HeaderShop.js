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
  Image,
  Dimensions,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign, EvilIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Avata from "../Avatar/Avata";
import fontSize from "../../utils/constant/fontSize";

const DimensionsWidth = Dimensions.get("screen").width;
const DimensionsHeight = Dimensions.get("screen").height;

const transformStar = (numberStar) => {
  if (numberStar === 5) {
    return [1, 1, 1, 1, 1];
  }
  if (numberStar === 4) {
    return [1, 1, 1, 1, 0];
  }
  if (numberStar === 3) {
    return [1, 1, 1, 0, 0];
  }
  if (numberStar === 2) {
    return [1, 1, 0, 0, 0];
  }
  if (numberStar === 1) {
    return [1, 0, 0, 0, 0];
  }
};
const renderStar = (item) => {
  if (item === 1) {
    return (
      <View>
        <FontAwesome
          name="star"
          size={13}
          color="#ffad27"
          style={{ paddingHorizontal: 2 }}
        />
      </View>
    );
  } else if (item > 0 && item < 1) {
    return <FontAwesome name="star-half-empty" size={13} color="#ffad27" />;
  } else {
    return (
      <View>
        <FontAwesome name="star-o" size={13} color="#ffad27" />
      </View>
    );
  }
};

export default function HeaderShop() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View>
        <View style={styles.imgAll}>
          <Image
            style={styles.imgHeader}
            source={{
              uri: "https://danviet.mediacdn.vn/296231569849192448/2022/10/4/fast-fashion-1-scaled-1-scaled-16644485707291618459798-1664760221079-16647602211731383114523-1664874462502-1664874462667985836065.jpeg",
            }}
          />
        </View>
        <View style={styles.headerHandle}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <View style={styles.inputSearch}>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(value) => setText(value)}
              value={text}
            />
            <View style={styles.SearchIcon}>
              <EvilIcons name="search" size={24} color="black" />
            </View>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </View>
        </View>
        <View style={styles.ContentHeader}>
          <View style={{ padding: 3 }}>
            <View style={styles.Avatar}>
              <Avata
                avatarUrl={
                  "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg"
                }
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.Shop}>
              <View style={{ maxWidth: "85%" }}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 15, flex: 1, fontWeight: "800" }}
                >
                  SYNTEE - Áo phông Syns
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="right" size={15} color="black" />
              </View>
            </View>
            <View style={styles.offLine}>
              <Text style={{ fontSize: fontSize.h3 }}>Online 2 giờ trước</Text>
            </View>
            <View style={styles.Evaluate}>
              <View style={styles.total}>
                <View style={styles.number}>{renderStar(1)}</View>
                <View>
                  <Text style={{ fontSize: fontSize.h3 }}>4.9/5.0</Text>
                </View>
              </View>

              <View style={{ padding: 2 }}>
                <Text
                  style={{ fontSize: fontSize.h3, maxWidth: "95%" }}
                  numberOfLines={1}
                >
                  28,4k Người theo dõi
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1.5, justifyContent: "space-around" }}>
            <View style={styles.btnFollow}>
              <Ionicons name="add" size={12} color="black" />
              <Text style={{ fontSize: fontSize.h3 }}>Theo dõi</Text>
            </View>
            <View style={styles.btnChat}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={12}
                color="black"
              />
              <Text style={{ fontSize: fontSize.h3 }}>Chat</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgHeader: {
    width: "100%",
    height: 180,
    opacity: 0.4,
  },
  imgAll: {
    position: "relative",
  },
  input: {
    opacity: 0.9,
    position: "relative",
    padding: 5,
    marginLeft: 30,
  },
  headerHandle: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    marginTop: "10%",
    width: "100%",
  },
  inputSearch: {
    flex: 5,
    borderWidth: 1,
  },
  SearchIcon: {
    position: "absolute",
    padding: 5,
  },
  Avatar: {
    width: DimensionsWidth * 0.2,
    height: DimensionsHeight * 0.09,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    flex: 1.5,
  },
  ContentHeader: {
    flexDirection: "row",
    position: "absolute",
    marginTop: "25%",
    padding: 3,
  },
  Shop: {
    flexDirection: "row",
  },
  Evaluate: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 3,
  },
  total: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 2,
    borderRadius: 20,
  },
  btnFollow: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 3,
    width: "90%",
    justifyContent: "center",
  },
  btnChat: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 3,
    width: "90%",
    justifyContent: "center",
  },
  content: {
    flex: 4,
  },
  offLine: {
    padding: 3,
  },
});
