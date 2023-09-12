import { ScrollView, View } from "react-native";
import SlidingMenu from "./SlidingMall/SlidingMall";
import MenuList from "./MenuList/MenuList";
import Introduction from "./Introduce/Introduce";
import SwiperComponent from "./Swiper/Swiper";
import Category from "./Category/Category";
import Product from "./Product/Product";
export default function Mall() {
  return (
    <>
      <ScrollView>
        <SwiperComponent />
        <MenuList />
        <SlidingMenu />
        <Introduction />
        <Category />
        <Product />
      </ScrollView>
    </>
  );
}
