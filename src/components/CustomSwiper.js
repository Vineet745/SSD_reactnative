import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';
import {colors} from '../utils/Theme';
import {horizontalScale, verticalScale} from '../utils/Dimension';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: verticalScale(5),
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(375),
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    bottom: 10,
    paddingHorizontal: horizontalScale(15),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const CustomSwiper = () => {
  return (
    <Swiper
    autoplay={true}
      paginationStyle={styles.paginationStyle}
      style={styles.wrapper}
      activeDotColor={colors.black}>
      <View style={styles.slide1}>
        <Image
          style={{width: '95%'}}
          source={require('../assets/images/promo_banner.png')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={{width: '95%'}}
          source={require('../assets/images/promo_banner.png')}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          style={{width: '95%'}}
          source={require('../assets/images/promo_banner.png')}
        />
      </View>
    </Swiper>
  );
};

export default CustomSwiper;
