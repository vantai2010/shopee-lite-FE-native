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
import { Entypo } from "@expo/vector-icons";
import fontSize from "../../utils/constant/fontSize";
import { FontAwesome } from "@expo/vector-icons";
import image from "../../Image/background11.png";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

function SlideShop() {
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
            size={8}
            color="#ffad27"
            style={{ paddingHorizontal: 1 }}
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

  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  const items = [
    {
      id: 0,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",
      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 1,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",

      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 2,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",

      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 3,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",

      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 4,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",

      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 5,
      img: image,
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",

      price: "đ999.999",
      star: 5,
      sold: 9999,
    },
    {
      id: 6,
      img: image,
      price: "đ999.999",
      dis: "Áo khoác Varsity Jacket tuyển chọn đẹp nhất quả đất",
      star: 5,
      sold: 9999,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.boxTips}>
        <View style={styles.Tip}>
          <Text style={{ fontSize: fontSize.h3, fontWeight: 700 }}>
            <TextFormatted id="mall.you" />
          </Text>
        </View>
        <TouchableOpacity style={styles.all}>
          <Text
            style={{ fontSize: fontSize.h3, color: "#fc5a32" }}
            onPress={() => handleNavigate(namePage.RECOMMEN)}
          >
            <TextFormatted id="mall.all" />
          </Text>
          <Entypo
            name="chevron-small-right"
            size={12}
            color="#fc5a32"
            style={{ alignItems: "center", justifyContent: "center" }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {items.map((item) => {
          return (
            <View style={styles.slide} key={item.id}>
              <TouchableOpacity
                onPress={() => handleNavigate(namePage.PRODUCTDETAILS)}
              >
                <View style={styles.scrollItem}>
                  <Image
                    style={styles.imageWidthHeight}
                    resizeMode="contain"
                    source={item.img}
                  />
                  <Text
                    style={{
                      fontSize: fontSize.h3,
                      paddingVertical: 5,
                      fontWeight: 800,
                    }}
                    numberOfLines={2}
                  >
                    {item.dis}
                  </Text>
                  <View style={styles.rowSpaceBetween}>
                    <Text
                      style={{
                        fontSize: fontSize.h3,
                        paddingVertical: 5,
                        textAlign: "center",
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                  <View style={styles.evaluate}>
                    <View style={styles.Star}>
                      {transformStar(item.star).map((stars) => {
                        return renderStar(stars);
                      })}
                    </View>
                    <View style={styles.Sold}>
                      <Text style={{ fontSize: fontSize.h4 }}>
                        <TextFormatted id="mall.vendu" />: {item.sold}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}

        <TouchableOpacity
          style={{ justifyContent: "center", padding: 20 }}
          onPress={() => handleNavigate(namePage.RECOMMEN)}
        >
          <View style={{ alignItems: "center" }}>
            <Entypo
              name="chevron-with-circle-right"
              size={30}
              color="#fc5a32"
            />
          </View>
          <TouchableOpacity style={styles.seeAll}>
            <Text style={{ fontSize: fontSize.h2, color: "#fc5a32" }}>
              <TextFormatted id="mall.all" />
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.product}>
        <Text style={{ fontSize: fontSize.h2, fontWeight: 600 }}>
          <TextFormatted id="mall.our" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  boxTips: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  all: {
    flexDirection: "row",
  },
  scrollItem: {
    width: 120,
    height: 200,
    borderWidth: 1,
    borderColor: "#717978",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  imageWidthHeight: {
    width: "100%",
    height: "50%",
  },
  slide: {
    paddingRight: 10,
  },
  evaluate: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Star: {
    flexDirection: "row",
  },
  product: {
    paddingVertical: 10,
  },
});

export default SlideShop;
