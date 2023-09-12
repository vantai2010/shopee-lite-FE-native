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
import bg1 from "../../../Image/background1.png";
import bg2 from "../../../Image/background2.png";
import bg3 from "../../../Image/background3.png";
import bg4 from "../../../Image/background4.png";
import bg5 from "../../../Image/background5.png";
import bg6 from "../../../Image/background6.png";
const widthDimensions = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    height: widthDimensions * 0.1,
    width: "100%",
  },
  slide1: { width: "100%", height: 50, justifyContent: "center" },
  image: { width: "100%", resizeMode: "contain" },
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
          autoplayTimeout={3}
          scrollEnabled
        >
          <View style={styles.slide1}>
            <Image source={bg1} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg2} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg3} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg4} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg5} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={bg6} style={styles.image} />
          </View>
        </Swiper>
      </View>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
