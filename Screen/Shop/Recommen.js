import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import fontSize from "../../utils/constant/fontSize";
import { AntDesign } from "@expo/vector-icons";
import Product from "../Mall/Product/Product";

function Recommen() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleNavigate(namePage.SHOP)}
        >
          <AntDesign name="left" size={20} color="#fc5a32" />
        </TouchableOpacity>
        <View style={styles.textHeader}>
          <Text style={{ fontSize: fontSize.h2 }}>Recommended For You</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Product />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
  },
  textHeader: {
    flex: 3,
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  icon: {
    flex: 1,
  },
  content: {
    paddingVertical: 10,
    backgroundColor: "#ebe8ec",
  },
});

export default Recommen;
