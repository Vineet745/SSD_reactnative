import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import cartItemStyle from './cartItemStyle';
import {fonts} from '../../utils/Theme';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteSingleCartItem} from '../../redux/slice/cartSlice';
import {deleteCart} from '../../service/api/CartApi';
import { increment,decrement} from '../../redux/slice/counterSlice';
import { RFValue } from 'react-native-responsive-fontsize';
const CartItem = ({item}) => {
  // Getting Product count from the Redux
  
const defaultPrice = item?.inventories?.transaction?.purchase_data?.default_price
const Mrp = item?.inventories?.transaction?.purchase_data?.mrp




  const productId = item.product_id;
  const id = item.id;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  // Delete Single Cart Item

  const DeleteSingleItem = async () => {
    try {
      const {data} = await deleteCart(id);
      dispatch(deleteSingleCartItem(productId));
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // Quantity Decrement

  const decrement = productId => {
    if (item.quantityCount > 1) {
      dispatch(decrement(productId));
    }
  };

  return (
    <View style={cartItemStyle.cartItemMain}>
      <TouchableOpacity activeOpacity={1} style={cartItemStyle.productCardMain}>
        {/* Image Wrapper */}

        <View style={cartItemStyle.imageHolder}>
          <Image source={require('../../assets/images/product_img.png')} />
        </View>

        {/* Detail Wrapper */}

        <View style={cartItemStyle.detailHolder}>
          {/* Cross Icon */}

          <TouchableOpacity
            onPress={() => DeleteSingleItem()}
            style={{marginBottom: verticalScale(20)}}>
            <AntDesign
              name="close"
              size={25}
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>

          {/* {Title Text} */}

          <Text style={cartItemStyle.titleText}>
            {item.product.product_name.substring(0, 25)}...
          </Text>

          <View style={cartItemStyle.MrpView}>
            <View style={cartItemStyle.MrpViewFirsttextContainer}>
              <Text style={cartItemStyle.MrpText}>M.R.P. : ₹ {Mrp}</Text>
            </View>
            <Text style={cartItemStyle.offerText}> 20% Off</Text>
            <Text style={cartItemStyle.ourPriceText}>Our Price: ₹ {defaultPrice}</Text>
          </View>

          {/* Border View */}

          <View
            style={{
              borderWidth: 0.5,
              marginVertical: verticalScale(5),
              borderColor: '#d1dbe2',
            }}
          />

          <View style={cartItemStyle.bottomWrapper}>
            <View style={cartItemStyle.quantityWrapper}>
              <TouchableOpacity onPress={() => dispatch(decrement(productId))}>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../assets/images/minus.png')}
                />
              </TouchableOpacity>

              <Text style={{fontFamily: fonts.SemiBold}}>
                {item.quantity}
                {/* {item.quantityCount?item.quantityCount:item.quantity} */}
              </Text>
              <TouchableOpacity onPress={() => dispatch(increment(productId))}>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../assets/images/plus.png')}
                />
              </TouchableOpacity>
              {/* <Text>01</Text> */}
            </View>
            <TouchableOpacity style={{marginLeft: verticalScale(5)}}>
              <AntDesign name="close" size={15} />
            </TouchableOpacity>
            <Text style={{fontFamily: fonts.SemiBold,fontSize:RFValue(11,667)}}> ₹ {defaultPrice} =  </Text>
            <Text style={{fontFamily: fonts.SemiBold,fontSize:RFValue(11,667)}}>
            {item.total_price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
