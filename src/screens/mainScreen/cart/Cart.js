import {View, Text, ScrollView, TouchableOpacity, FlatList, Modal, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import cartStyle from './cartStyle';
import {colors, fonts} from '../../../utils/Theme';
import CartItem from '../../../components/cartItems/CartItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {getCart} from '../../../service/api/CartApi';
import {useDispatch, useSelector} from 'react-redux';
import { cartlength, setCartProducts } from '../../../redux/slice/cartSlice';
import Loader from '../../../utils/Loader';

const Cart = () => {
  
  const dispatch = useDispatch();
  const isfocused = useIsFocused();
  const [cart, setCart] = useState([])
  const [total,setTotal] = useState()
  const [loading, setloading] = useState(false);




  // Get Cart Items
  const {navigate} = useNavigation();



  // Get Cart

  const handleGetCart = async () => {
    try {
      setloading(true)
      const {data} = await getCart('ONLINE')
      setTotal(data?.total_amount)
      setCart(data?.data?.data)
      dispatch(setCartProducts(data?.data?.data))
      setloading(false)
    } catch (error) {
      console.log('error', error);
      setloading(false)
      throw error;
    }
  }; 

  useEffect(() => {
      handleGetCart();
  }, [cart]);







  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      {/* Loader */}

    <Loader loading={loading}/>



      <View style={cartStyle.cartOffer}>
        <Text style={cartStyle.cartOfferText}>
          Add Items of at least ₹ 175.50 more to get FREE DELIVERY!
        </Text>
      </View>

      <View style={cartStyle.cartHolder}>
        <View style={cartStyle.cartTopText}>
          <Text style={{color: '#728c9e', fontFamily: fonts.Regular}}>
            Items: Total {cart.length}
          </Text>
          <TouchableOpacity>
            <Text style={{color: colors.black, fontFamily: fonts.SemiBold}}>
              Clear Cart
            </Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => ( 
                 
              <CartItem item={item} />
          )}
        />

        <View style={cartStyle.BottomMainView}>
          <View style={{borderWidth: 0.4}}></View>
          <View style={cartStyle.BottomTextView}>
            <Text style={{fontFamily: fonts.SemiBold, color: '#5e7c91'}}>
              Total Bill Amount
            </Text>
            <Text style={{fontFamily: fonts.SemiBold, color: '#5e7c91'}}>
            ₹{total}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate('Checkout & Options',{total})}
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
