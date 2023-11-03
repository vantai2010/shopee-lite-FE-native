import { ScrollView, View, Text } from "react-native";
import SlidingMenu from "./SlidingMall/SlidingMall";
import MenuList from "./MenuList/MenuList";
import Introduction from "./Introduce/Introduce";
import SwiperComponent from "./Swiper/Swiper";
import Category from "./Category/Category";
import Product from "./Product/Product";
import TextFormatted from "../../Components/TextFormatted/TextFormatted";
export default function Mall() {
  return (
    <>
      <ScrollView>
        <SwiperComponent />
        <MenuList />
        <SlidingMenu />
        <Introduction />
        <Category />
        <View style={{ paddingTop: 20, paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "red" }}>
            <TextFormatted id="mall.suggestion" />
          </Text>
        </View>
        <Product />
      </ScrollView>
    </>
  );
}
