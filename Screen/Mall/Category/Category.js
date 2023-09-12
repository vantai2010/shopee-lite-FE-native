import { AntDesign } from "@expo/vector-icons";
import BackgroundIntro from "../Introduce/BackgroundIntro";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
export default function Category() {
  const list = [
    {
      image: 1,
      title: "Astra Reward",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp",
    },
    {
      image: 2,
      title: "Exchange",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp",
    },
    {
      image: 3,
      title: "Tốt & Nhanh",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/7e/00/fe/a9798708549255148735ce9406fa7b4d.png.webp",
    },
    {
      image: 4,
      title: "Giá rẻ mỗi ngày",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp",
    },
    {
      image: 5,
      title: "Xả kho",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp",
    },
    {
      image: 6,
      title: "Mã giảm giá",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp",
    },
    {
      image: 7,
      title: "Ưu đãi thẻ, ví",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp",
    },
    {
      image: 8,
      title: "Nap thẻ",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp",
    },
    {
      image: 9,
      title: "Mua trước trả sau",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp",
    },
    {
      image: 10,
      title: "Bảo hiểm",
      image:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp",
    },
  ];
  const numColumns = Math.ceil(list.length / 1);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentUp}>
          <View>
            <Text style={styles.contentUpLeft}>Danh mục</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.contentUpRight}>Tìm hiểu ngay</Text>
            <AntDesign name="right" size={13} color="black" />
          </View>
        </View>
        <View style={styles.contentCenter}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingVertical: 5 }}
          >
            <FlatList
              data={list}
              keyExtractor={(item) => item.screen}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              numColumns={numColumns}
              renderItem={({ item }) => (
                <View style={styles.MenuOption}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.textTitle}>{item.title}</Text>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <BackgroundIntro />
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {},
  contentUp: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentUpLeft: {
    fontSize: 16,
    fontWeight: "500",
  },
  contentUpRight: {
    fontWeight: "300",
  },
  contentCenter: {},
  MenuOption: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
    objectFit: "cover",
    borderRadius: 10,
  },
  contentDown: {},
});
