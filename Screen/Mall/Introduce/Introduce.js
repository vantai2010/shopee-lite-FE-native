import { View, TextInput, StyleSheet, Image } from "react-native";

import BackGround1 from "../../../Image/background1.png";

export default function Introduction() {
  return (
    <View style={styles.container}>
      <Image
        source={BackGround1}
        style={{
          flex: 1,
          alignSelf: "center",
          width: "97%",
          height: 130,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
