import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwiperProduct from "./SwiperProduct/SwiperProduct";
import ProductInformation from "./ProductInformation/ProductInformation";
import Transport from "./Transport/Transport";
import Describe from "./Describe/Describe";
import InfromationPro from "./Describe/InformationPro";
import NavMenu from "./NavMenu/NavMenu";
export default function ProductDetails() {
  return (
    <>
      <ScrollView style={styles.container}>
        <SwiperProduct />
        <ProductInformation />
        <Transport />
        <Describe />
        <InfromationPro />
      </ScrollView>
      <NavMenu />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4e6e8",
  },
});
