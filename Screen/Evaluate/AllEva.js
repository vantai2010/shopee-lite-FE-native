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
import { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import color from "../../utils/constant/color";
import keyMap from "../../utils/constant/keyMap";
import { FontAwesome } from "@expo/vector-icons";
import Avata from "../Avatar/Avata";
import { getListReviewOfProductService } from "../../service/appService";
import { useSelector } from "react-redux";
import { Toast } from "toastify-react-native";

const DimensionsWidth = Dimensions.get("screen").width;
const DimensionsHeight = Dimensions.get("screen").height;



export default function Alleva() {
  const language = useSelector(state => state.app.language)
  const route = useRoute()
  const productId = route.params?.productId
  const navigation = useNavigation();
  const [listReviews, setListReviews] = useState([])

  const getListReviews = async () => {
    let response = await getListReviewOfProductService(productId)
    if (response && response.errCode === 0) {
      setListReviews(response.data)
    } else {
      Toast.error(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getListReviews()
  }, [])

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };


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

          {
            listReviews.map((item) => {
              return (
                <View key={item.id}>
                  <TouchableOpacity
                    style={styles.titleContent}
                    onPress={() => handleNavigate(namePage.ALLEVA)}
                  >
                    <View style={styles.headerContent}>
                      <View style={styles.Avatar}>
                        <Image
                          source={item.userReviewData?.image ? { uri: environment.BASE_URL_BE_IMG + item.userReviewData?.image } : require("../../Image/default_avatar.png")}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </View>
                      <View style={styles.Eva}>
                        <View style={styles.nameHeader}>
                          <Text style={{ color: "black" }}>{language === keyMap.EN ? `${item.userReviewData?.firstName} ${item.userReviewData?.lastName}` : `${item.userReviewData?.lastName} ${item.userReviewData?.firstName}`}</Text>
                        </View>
                        <View style={styles.StarHeader}>
                          {transformStar(item.rating).map((stars) => {
                            return renderStar(stars);
                          })}
                        </View>
                        <View style={styles.Typecontent}>
                          <Text style={{ color: "grey", fontSize: fontSize.h3 }}>
                            {item.productTypeReviewData?.type ? `Phân loại: ${item.productTypeReviewData?.type}` : ``} {item.productTypeReviewData?.size ? `-${item.productTypeReviewData?.size}` : ``}
                          </Text>
                        </View>
                      </View>
                    </View>
                    {
                      item.comment &&
                      <View style={styles.TextContent}>
                        <Text style={{ fontSize: fontSize.h3 }}>
                          {item.comment}
                        </Text>
                      </View>
                    }

                    <View style={styles.dateContent}>
                      <Text style={{ color: "grey", fontSize: fontSize.h3 }}>
                        {item.time}
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
