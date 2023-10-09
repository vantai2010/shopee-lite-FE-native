import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../../utils/constant/namePage";
import bg7 from "../../../Image/background7.png";
import { Entypo, AntDesign } from "@expo/vector-icons";
export default function Product() {
  const products = [
    {
      id: 1,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
    {
      id: 2,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
    {
      id: 3,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
    {
      id: 4,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
    {
      id: 5,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
    {
      id: 6,
      nameProduct: "Điện thoại samsung Galaxy Z Flip 4(8G/12G)",
      image:
        "https://salt.tikicdn.com/cache/368x368/ts/product/6a/be/a4/eed46980c01c6332b513831e13dd14cf.jpg.webp",
      price: "159.000đ",
      sold: "385",
      sale: "-39%",
      address: "Hà Nội",
    },
  ];
  const numColumns = Math.ceil(products.length / 2);
  const navigation = useNavigation();
  const handleDetailsProduct = () => {
    navigation.navigate(namePage.PRODUCTDETAILS);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.suggest}>
          <Text style={styles.textSuggest}>Gợi ý hôm nay</Text>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.InformationItem}
              key={item.nameProduct}
              onPress={handleDetailsProduct}
            >
              <View style={styles.imageProduct}>
                <Image style={styles.imageSale} source={bg7} />
                <View style={styles.triangle}></View>
                <View style={styles.rectangle}>
                  <Text style={styles.textSale}>{item.sale}</Text>
                </View>
                <View style={styles.triangleUp}></View>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.mail}>Mall</Text>
                <Text style={styles.textProduct}>{item.nameProduct}</Text>
              </View>

              <Text style={styles.textPrice}>Giá: {item.price}</Text>

              <View style={{ paddingHorizontal: 5 }}>
                <View style={styles.starRate}>
                  <Entypo name="star" size={24} color="#ffce3d" />
                  <Entypo name="star" size={24} color="#ffce3d" />
                  <Entypo name="star" size={24} color="#ffce3d" />
                  <Entypo name="star" size={24} color="#ffce3d" />
                  <Entypo name="star" size={24} color="#ffce3d" />
                </View>
                <Text style={styles.textProduct}>Đã bán: {item.sold}</Text>
              </View>
              <View style={styles.address}>
                <AntDesign name="enviromento" size={15} color="gray" />
                <Text style={{ color: "gray" }}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  suggest: {
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  textSuggest: {
    fontSize: 20,
    fontWeight: "500",
    color: "red",
  },
  InformationItem: {
    width: "50%",
    margin: 5,
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    paddingBottom: 5,
  },
  imageProduct: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  imageSale: {
    width: "70%",
    height: 15,
    position: "absolute",
    zIndex: 2,
    top: 183,
  },
  starRate: {
    flexDirection: "row",
  },
  textProduct: {
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  textPrice: {
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    color: "#ef4d2d",
    fontWeight: "500",
  },
  triangle: {
    width: 0,
    height: 0,
    top: 20,
    right: 194,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: "transparent",
    borderRightColor: "red",
    borderBottomColor: "transparent",
    position: "absolute",
    zIndex: 3,
  },
  mail: {
    backgroundColor: "red",
    width: "20%",
    textAlign: "center",
    borderRadius: 2,
    color: "#ffffff",
    fontWeight: "500",
    position: "absolute",
    top: 7,
    right: 160,
  },
  rectangle: {
    width: "27%",
    height: "25%",
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
    borderRightWidth: 27,
    borderBottomWidth: 20,
    borderLeftWidth: 27,
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
    marginTop: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 20,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
  },
});
