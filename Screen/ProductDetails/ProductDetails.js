import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwiperProduct from "./SwiperProduct/SwiperProduct";
import ProductInformation from "./ProductInformation/ProductInformation";
import Transport from "./Transport/Transport";
import Describe from "./Describe/Describe";
import InfromationPro from "./Describe/InformationPro";
import NavMenu from "./NavMenu/NavMenu";
import Evaluate from "../Evaluate/Evaluate";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getInforProductByIdService } from "../../service/appService";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";

export default function ProductDetails() {
  const language = useSelector(state => state.app.language)
  const route = useRoute()
  const productId = route.params?.productId
  const [product, setProduct] = useState({})
  const [inforReview, setInforReview] = useState({})
  const getInforProduct = async () => {
    let response = await getInforProductByIdService(productId)
    if (response && response.errCode === 0) {
      setProduct(response.data)
      setInforReview(response.star)
    } else {
      alert(language === keyMap.EN ? response?.messageEN : response?.messageVI)
    }
  }

  useEffect(() => {
    getInforProduct()
  }, [productId])


  // console.log(product)
  return (
    <>
      <ScrollView style={styles.container}>
        <SwiperProduct product={product} />
        <ProductInformation product={product} inforReview={inforReview} />
        <Transport />
        {/* <Describe /> */}
        <InfromationPro product={product} />
        <Evaluate product={product} inforReview={inforReview} />
      </ScrollView>
      <NavMenu product={product} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4e6e8",
  },
});
