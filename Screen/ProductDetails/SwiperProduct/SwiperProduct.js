import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import environment from '../../../utils/constant/environment';

const widthDimensions = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    marginTop: 25,
    height: widthDimensions * 0.1,
    width: '100%',
    height: 300,
  },
  slide1: { width: '100%', justifyContent: 'center' },
  image: { width: '100%', height: 300 },
});

const SwiperComponent = ({ product }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={3}
        scrollEnabled
      >
        {product && product.image ? (
          product.image.map((item) => {
            let uriImage = environment.BASE_URL_BE_IMG + item;
            return (
              <View key={item} style={styles.slide1}>
                <Image source={{ uri: uriImage }} style={styles.image} />
              </View>
            );
          })
        ) : (
          <View style={styles.slide1}>
            <Image source={{ uri: null }} style={styles.image} />
          </View>
        )}
      </Swiper>
    </View>
  );
};

export default SwiperComponent;
