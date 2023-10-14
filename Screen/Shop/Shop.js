import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import NaviShop from "./NaviShop";
import HeaderShop from "./HeaderShop";
import SlideShop from "./SlideShop";
import Product from "../Mall/Product/Product";
import Recommen from "./Recommen";

export default function Shop() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <SafeAreaView>
      <HeaderShop />
      {/* <Recommen /> */}
      <ScrollView>
        <SlideShop />
        <View>
          <Product />
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
