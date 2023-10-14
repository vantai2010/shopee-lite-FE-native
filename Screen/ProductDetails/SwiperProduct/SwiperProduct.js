import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

import Swiper from "react-native-swiper";
import bg7 from "../../../Image/background8.png";
import bg8 from "../../../Image/background11.png";
import bg9 from "../../../Image/background12.png";
import bg10 from "../../../Image/background13.png";
const widthDimensions = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    marginTop: 25,
    height: widthDimensions * 0.1,
    width: "100%",
    height: 300,
  },
  slide1: { width: "100%", justifyContent: "center" },
  image: { width: "100%", height: 300 },
});
export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={1}
          scrollEnabled
        >
          <View style={styles.slide1}>
            <Image source={bg9} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg8} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg9} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg10} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg7} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg10} style={styles.image} />
          </View>
        </Swiper>
      </View>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
