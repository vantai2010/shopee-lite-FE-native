import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  AntDesign,
} from "react-native";

const dataFake = [
  {
    image: 1,
    title: "Đồ Chơi",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
  },
  {
    image: 2,
    title: "Điện Thoại",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
  },
  {
    image: 3,
    title: "Làm Đẹp",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp",
  },
  {
    image: 4,
    title: "Thời trang nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
  },
  {
    image: 5,
    title: "Giày-Dép",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp",
  },
  {
    image: 6,
    title: "Túi thời trang nữ",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
  },
  {
    image: 7,
    title: "Giày-Déo Nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp",
  },
  {
    image: 8,
    title: "Túi thời trang nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp",
  },
  {
    image: 9,
    title: "Balo và Vali",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
  },
  {
    image: 10,
    title: "Kính Mắt",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp",
  },
  {
    image: 11,
    title: "Đồng Hồ",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp",
  },
  {
    image: 12,
    title: "Nhà Cửa",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp",
  },
  {
    image: 13,
    title: "Bách Hóa",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp",
  },
  {
    image: 14,
    title: "Thiết bị số",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp",
  },
  {
    image: 15,
    title: "Voucher",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp",
  },
  {
    image: 16,
    title: "Xe máy",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp",
  },
  {
    image: 17,
    title: "Nhà sách",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp",
  },
  {
    image: 18,
    title: "Điện tử",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
  },
  {
    image: 19,
    title: "Thể thao",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp",
  },
  {
    image: 20,
    title: "Máy ảnh",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp",
  },
  {
    image: 21,
    title: "Ngon",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp",
  },
];

const numColumns = Math.ceil(dataFake.length / 2);

export default function SlidingMall() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ paddingVertical: 5 }}
        >
          <FlatList
            data={dataFake}
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
    </>
  );
}


const styles = StyleSheet.create({
  container: {},
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
  textTitle: {
    textAlign: "center",
  },
});
