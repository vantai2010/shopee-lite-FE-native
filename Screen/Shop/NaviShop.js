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
import TextFormatted from "../../Components/TextFormatted/TextFormatted";

function NaviShop() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.boxContainer}
        onPress={() => handleNavigate(namePage.ss)}
      >
        <Text style={styles.textbox} numberOfLines={2}>
          Shop
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.textbox}>
          <TextFormatted id="mall.product" />
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.textbox}>
          <TextFormatted id="mall.menu" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#ccc",
  },
  boxContainer: {
    padding: 10,
    maxWidth: "30%",
    flex: 1,
    justifyContent: "center",
  },
  textbox: {
    textAlign: "center",
    fontSize: fontSize.h3,
  },
});

export default NaviShop;
