import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderShop from "./HeaderShop";
import SlideShop from "./SlideShop";
import { getInforShopBySupplierIdService } from "../../service/appService";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap";
import { useEffect, useState } from "react";
import ProductOfShop from "./ProductOfShop";

export default function Shop() {
  const language = useSelector(state => state.app.language)
  const navigation = useNavigation();
  const route = useRoute()
  const supplierId = route.params?.supplierId
  const [inforShop, setInforShop] = useState({})

  const getInforShop = async () => {
    let response = await getInforShopBySupplierIdService(supplierId)
    if (response && response.errCode === 0) {
      setInforShop(response.data)
    } else {
      alert(language === keyMap.EN ? response.messageEN : response.messageVI)
    }
  }

  useEffect(() => {
    getInforShop()
  }, [supplierId])

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <SafeAreaView>
      <HeaderShop inforShop={inforShop} getInforShop={getInforShop} />
      {/* <Recommen /> */}
      <ScrollView>
        <SlideShop />
        <View>
          <ProductOfShop products={inforShop.listProducts} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
