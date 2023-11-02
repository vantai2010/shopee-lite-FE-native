import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import environment from "../../../utils/constant/environment";
import { useSelector } from "react-redux";
import keyMap from "../../../utils/constant/keyMap";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../../utils/constant/namePage";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import handleFormatMoney from "../../../utils/formatMoney"

export default function ProductInformation({ product, inforReview }) {
  const navigation = useNavigation()
  const language = useSelector(state => state.app.language)
  const [star, setStar] = useState([]);

  useEffect(() => {
    function splitDecimal(number) {
      if (!number) return
      const integerPart = Math.floor(number);
      const fractionalPart = number - integerPart;
      return { integer: integerPart, fractional: fractionalPart };
    }
    let arr = []
    if (inforReview && inforReview.averageRating) {
      const { integer, fractional } = splitDecimal(inforReview?.averageRating);
      let integerRating = integer
      let addFractional = false
      for (let i = 0; i < 5; i++) {
        if (integerRating > 0) {
          arr.push(1)
        } else if (integerRating === 0 && addFractional === false) {
          arr.push(fractional)
          addFractional = true
        } else {
          arr.push(0)
        }
        integerRating = integerRating - 1
      }
    }
    setStar(arr)
  }, [inforReview])


  const renderStar = (item) => {
    if (item === 1) {
      return (
        <View key={item + Math.random(0, 1)}>
          <FontAwesome
            name="star"
            size={20}
            color="#ffad27"
            style={{ paddingHorizontal: 2 }}
          />
        </View>
      );
    } else if (item > 0 && item < 1) {
      return <FontAwesome key={item + Math.random(0, 1)} name="star-half-empty" size={20} color="#ffad27" />;
    } else {
      return (
        <View key={item + Math.random(0, 1)}>
          <FontAwesome name="star-o" size={20} color="#ffad27" />
        </View>
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentUp}>
          <View style={styles.contentUpLeft}>
            <View style={styles.nameProduct}>
              <Text>{product.name}</Text>
            </View>
          </View>
          <View style={styles.contentUpRight}>
            <View style={styles.triangleUp}></View>
            <View style={styles.rectangle}>
              <Text style={styles.textSale}>Giảm 35%</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentCenter}>
          <Text style={styles.price}>Giá: {handleFormatMoney(product.price)}</Text>
          <View style={styles.love}>
            <Text style={{ color: "#ffffff" }}>Yêu Thích + </Text>
          </View>
        </View>

        <View style={styles.contentDown}>

          <View style={styles.starRate}>
            {star.map((item) => {
              return renderStar(item);
            })}

            {/* <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" />
            <Entypo name="star" size={20} color="#ffce3d" /> */}
          </View>
          <View style={{ paddingLeft: 55 }}>
            <Text>Đã bán : {product.bought}</Text>
          </View>
          {/* <View style={styles.iconShare}>
            <AntDesign name="hearto" size={24} color="gray" />
            <MaterialCommunityIcons
              style={{ paddingLeft: 20 }}
              name="share"
              size={24}
              color="gray"
            />
          </View> */}
        </View>

        <View style={styles.voucher}>
          <Text style={styles.voucherShop}>
            Voucher của Shop
            <AntDesign name="arrowright" size={15} color="gray" />
          </Text>
          <Text style={styles.productReduce}>Sản phẩm được giảm 10k</Text>
          <Text style={styles.buyProduct}>mua 2 & giảm 3%</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", backgroundColor: 'white', marginVertical: 10, padding: 5 }}>
        <View style={{ width: 100, height: 100, marginRight: 30 }}>
          {
            product.productSupplierData?.image ?
              <Image style={styles.imageAvatar} source={{ uri: environment.BASE_URL_BE_IMG + product.productSupplierData.image }} />
              :
              <Image style={styles.imageAvatar} source={require("../../../Image/default_avatar.png")} />
          }
        </View>
        <View style={{ flexDirection: "column", justifyContent: "space-between", padding: 15 }}>
          <Text>
            {language === keyMap.EN ? product.productSupplierData?.firstName + " " + product.productSupplierData?.lastName : product.productSupplierData?.lastName + " " + product.productSupplierData?.firstName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ flexDirection: "row", borderColor: "red", borderWidth: 1, height: 30, width: 120, justifyContent: "center", alignItems: "center", marginRight: 10 }}
              onPress={() => { }}
            >
              <Entypo name="chat" size={20} color="red" style={{ marginRight: 4 }} />
              <Text>Chat ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", borderColor: "grey", borderWidth: 1, height: 30, width: 120, justifyContent: "center", alignItems: "center" }}
              onPress={() => { navigation.navigate(namePage.SHOP, { supplierId: product.supplierId }) }}
            >
              <Entypo name="shop" size={20} color="black" style={{ marginRight: 4 }} />
              <Text>Xem shop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  imageAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  container: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    height: "auto",
  },
  productReduce: {
    marginHorizontal: 10,
    padding: 5,
    marginTop: 10,
    fontSize: 14,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#ff7337",
  },
  buyProduct: {
    width: "30%",
    marginHorizontal: 10,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#ff7337",
    color: "#ff7337",
  },
  contentUp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  contentUpLeft: {
    flex: 8,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  contentUpRight: {
    flex: 1,
  },
  nameProduct: {
    paddingTop: 5,
  },
  rectangle: {
    width: "100%",
    height: 57,
    backgroundColor: "#fad435",
    position: "absolute",
    zIndex: 3,
    right: 0,
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 22,
    borderBottomWidth: 17,
    borderLeftWidth: 21,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    borderLeftColor: "transparent",
    position: "absolute",
    zIndex: 4,
    right: 0,
    top: 40,
  },
  textSale: {
    textAlign: "center",
    color: "red",
    fontWeight: "400",
  },
  contentCenter: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  love: {
    marginLeft: 40,
    backgroundColor: "#ee4d2d",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  price: {
    color: "#ee4d2d",
    fontSize: 18,
    fontWeight: "500",
  },
  starRate: {
    flexDirection: "row",
  },
  contentDown: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconShare: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  voucherShop: {
    paddingLeft: 15,
    paddingTop: 10,
    fontSize: 17,
    alignItems: "center",
  },
  voucher: {
    marginTop: 10,
    height: "auto",
  },
});
