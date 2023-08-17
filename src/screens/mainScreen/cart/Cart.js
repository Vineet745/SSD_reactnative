import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import cartStyle from './cartStyle';
import {colors, fonts} from '../../../utils/Theme';
import CartItem from '../../../components/cartItems/CartItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={cartStyle.cartOffer}>
        <Text style={cartStyle.cartOfferText}>
          Add Items of at least ₹ 175.50 more to get FREE DELIVERY!
        </Text>
      </View>

      <View style={cartStyle.cartHolder}>
        <View style={cartStyle.cartTopText}>
          <Text style={{color: '#728c9e', fontFamily: fonts.Regular}}>
            Items: Total 05
          </Text>
          <Text style={{color: colors.black, fontFamily: fonts.SemiBold}}>
            Clear Cart
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>

        <View style={cartStyle.BottomMainView}>
          <View style={{borderWidth: 0.4}}></View>
          <View style={cartStyle.BottomTextView}>
            <Text style={{fontFamily: fonts.SemiBold, color: '#5e7c91'}}>
              Total Bill Amount
            </Text>
            <Text style={{fontFamily: fonts.SemiBold, color: '#5e7c91'}}>₹ 835.50</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate('Checkout & Options')}
            activeOpacity={1}
            style={cartStyle.ButtonStyle}>
            <Text style={cartStyle.ButtonTextStyle}>Proceed to Check Out</Text>
            <AntDesign name="right" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
