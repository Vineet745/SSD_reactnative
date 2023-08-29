import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts} from '../../utils/Theme';
import {useSelector} from 'react-redux';
import {getCart} from '../../service/api/CartApi';

const CartIcon = () => {
  const {navigate} = useNavigation();
  const {length} = useSelector(state => state.cart);

  return (
    <View>
      <TouchableOpacity onPress={() => navigate('My Cart')}>
        <Image
          source={require('../../assets/images/icon_cart.png')}
          style={{marginRight: horizontalScale(10)}} // Adjust the margin as needed
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          right: horizontalScale(3),
          top: verticalScale(-6),
          borderRadius: 50,
          width: 16,
          height: 16,
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontSize: RFValue(10, 667),
            fontFamily: fonts.Bold,
            color: colors.white,
          }}>
          {length}
        </Text>
      </View>
    </View>
  );
};

export default CartIcon;
