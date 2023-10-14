import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Dimensions,
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
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import color from "../../utils/constant/color";
import { FontAwesome } from "@expo/vector-icons";
import Avata from "../Avatar/Avata";

const DimensionsWidth = Dimensions.get("screen").width;
const DimensionsHeight = Dimensions.get("screen").height;

const choose = [
  {
    id: 0,
    name: "Tất cả",
    quantity: "(2.1k)",
  },
  {
    id: 1,
    name: "Có hình ảnh / video",
    quantity: "(2.1k)",
  },
  {
    id: 2,
    name: "Sao",
    icon: <AntDesign name="down" size={10} color="black" />,
    star: (
      <FontAwesome
        name="star"
        size={10}
        color="#ffad27"
        style={{ padding: 5 }}
      />
    ),
    quantity: "(Tất cả)",
  },
  {
    id: 3,
    name: "Phân loại",
    quantity: "(Tất cả)",
    icon: <AntDesign name="down" size={10} color="black" />,
  },
];

const item = [
  {
    id: 0,
    name: "Đạt",
    avatar:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg",
    star: 5,
    type: "Đen, L",
    content:
      "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Nexon. Trò chơi được thông báo lần đầu vào tháng 11 năm 2017, và ra mắt lần đầu tiên vào ngày 17 tháng 5 năm 2018 ở Hàn Quốc",
    date: "02-08-2002  14:39",
  },
  {
    id: 1,
    name: "Đạt",
    avatar:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg",
    star: 5,
    type: "Đen, L",
    content:
      "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Nexon. Trò chơi được thông báo lần đầu vào tháng 11 năm 2017, và ra mắt lần đầu tiên vào ngày 17 tháng 5 năm 2018 ở Hàn Quốc",
    date: "02-08-2002  14:39",
  },
  {
    id: 2,
    name: "Đạt",
    avatar:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg",
    star: 5,
    type: "Đen, L",
    content:
      "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Nexon. Trò chơi được thông báo lần đầu vào tháng 11 năm 2017, và ra mắt lần đầu tiên vào ngày 17 tháng 5 năm 2018 ở Hàn Quốc",
    date: "02-08-2002  14:39",
  },
  {
    id: 3,
    name: "Đạt",
    avatar:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg",
    star: 5,
    type: "Đen, L",
    content:
      "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Nexon. Trò chơi được thông báo lần đầu vào tháng 11 năm 2017, và ra mắt lần đầu tiên vào ngày 17 tháng 5 năm 2018 ở Hàn Quốc",
    date: "02-08-2002  14:39",
  },
  {
    id: 4,
    name: "Đạt",
    avatar:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg",
    star: 5,
    type: "Đen, L",
    content:
      "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Nexon. Trò chơi được thông báo lần đầu vào tháng 11 năm 2017, và ra mắt lần đầu tiên vào ngày 17 tháng 5 năm 2018 ở Hàn Quốc",
    date: "02-08-2002  14:39",
  },
];

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

export default function Alleva() {
  const [star, setStar] = useState([1, 1, 1, 1, 0.5]);

  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.Header}>
          <TouchableOpacity
            style={styles.iconheader}
            onPress={() => handleNavigate(namePage.PRODUCTDETAILS)}
          >
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          {choose.map((e) => {
            return (
              <TouchableOpacity key={e.id} style={styles.boxBtn}>
                <View style={styles.btn}>
                  <Text style={{ fontSize: fontSize.h3 }} numberOfLines={2}>
                    {e.name}
                  </Text>
                  <View>{e.star}</View>
                  <View>{e.icon}</View>
                </View>
                <Text style={{ fontSize: fontSize.h3 }}>{e.quantity}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.content}>
          {item.map((item) => {
            return (
              <View key={item.id}>
                <TouchableOpacity style={styles.titleContent}>
                  <View style={styles.headerContent}>
                    <View style={styles.Avatar}>
                      <Avata
                        avatarUrl={
                          "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg"
                        }
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={styles.Eva}>
                      <View style={styles.nameHeader}>
                        <Text style={{ color: "black" }}>{item.name}</Text>
                      </View>
                      <View style={styles.StarHeader}>
                        {transformStar(item.star).map((stars) => {
                          return renderStar(stars);
                        })}
                      </View>
                      <View style={styles.Typecontent}>
                        <Text style={{ color: "grey", fontSize: fontSize.h3 }}>
                          Phân loại: {item.type}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.TextContent}>
                    <Text style={{ fontSize: fontSize.h3 }}>
                      {item.content}
                    </Text>
                  </View>
                  <View style={styles.dateContent}>
                    <Text style={{ color: "grey", fontSize: fontSize.h3 }}>
                      {item.date}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 0.2,
    borderColor: "grey",
    paddingVertical: 30,
  },

  Avatar: {
    width: DimensionsWidth * 0.1,
    height: DimensionsHeight * 0.05,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    padding: 10,
  },
  StarHeader: {
    flexDirection: "row",
    paddingVertical: 3,
  },
  Eva: {
    paddingHorizontal: 10,
  },
  TextContent: {
    padding: 10,
  },

  titleContent: {
    borderBottomWidth: 0.2,
    borderColor: "grey",
  },
  dateContent: {
    padding: 10,
  },
  btn: {
    // flexDirection: 'row'
    maxWidth: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  boxBtn: {
    backgroundColor: "#ccc",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  iconheader: {
    justifyContent: "center",
  },
});
