import { View, TextInput, StyleSheet, Image } from "react-native";

import BackGround10 from "../../../Image/background10.png";
export default function BackgroundIntro() {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={BackGround10}
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
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
