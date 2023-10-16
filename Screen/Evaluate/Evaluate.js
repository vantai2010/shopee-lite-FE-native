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
import namePage from "../../utils/constant/namePage";

const DimensionsWidth = Dimensions.get("screen").width;
const DimensionsHeight = Dimensions.get("screen").height;

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


export default function Evaluate({ product }) {
  const [star, setStar] = useState([1, 1, 1, 1, 0.5]);

  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };


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
    if (numberStar === 0) {
      return [0, 0, 0, 0, 0];
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.HeaderContainer}>
          <View style={styles.EvaluateAndStar}>
            <View style={styles.Evaluate}>
              <Text style={{ fontSize: fontSize.h2 }}>Đánh giá sản phẩm</Text>
            </View>

            <View style={styles.boxStar}>
              <View style={styles.number}>
                {star.map((item) => {
                  return renderStar(item);
                })}
              </View>
              <View style={styles.total}>
                <Text style={{ fontSize: fontSize.h3, color: "#f25220" }}>
                  4.9/5.0
                </Text>
              </View>

              <View style={styles.review}>
                <Text style={{ fontSize: fontSize.h3 }}>({product.productReviewData?.length} đánh giá)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.All}
            onPress={() => handleNavigate(namePage.ALLEVA)}
          >
            <Text style={styles.TextAll}>Xem tất cả</Text>
            <AntDesign name="right" size={18} color="#f25220" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {item.map((item) => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  style={styles.titleContent}
                  onPress={() => handleNavigate(namePage.ALLEVA)}
                >
                  <View style={styles.headerContent}>
                    <View style={styles.Avatar}>
                      <Image
                        source={item.avatar}
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
        <TouchableOpacity
          style={styles.Footer}
          onPress={() => handleNavigate(namePage.ALLEVA)}
        >
          <View style={styles.seeAll}>
            <Text style={{ color: "#f25220" }}>Xem Tất Cả (39)</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    padding: 8,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  wrapper: {
    flex: 1,
  },
  number: {
    flexDirection: "row",
    paddingRight: 5,
  },
  boxStar: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  EvaluateAndStar: {
    flex: 3,
  },
  All: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  TextAll: {
    fontSize: fontSize.h3,
    color: "#f25220",
  },
  Avatar: {
    width: DimensionsWidth * 0.1,
    height: DimensionsHeight * 0.05,
    borderRadius: 40,
    overflow: "hidden",
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
  Footer: {
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: "grey",
  },
  seeAll: {
    alignItems: "center",
  },
  titleContent: {
    borderBottomWidth: 0.2,
    borderColor: "grey",
  },
  dateContent: {
    padding: 10,
  },
});
