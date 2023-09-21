import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import cartItemStyle from './cartItemStyle';
import {fonts} from '../../utils/Theme';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteSingleCartItem,
  getCart,
  updateCart,
} from '../../service/api/CartApi';
import {RFValue} from 'react-native-responsive-fontsize';
import {decrement, increment} from '../../redux/slice/counterSlice';
const CartItem = ({item, setRender}) => {
  const [updated, setUpdated] = useState('');
  const [localQuantity, setLocalQuantity] = useState(item.quantity);
  const Mrp = item?.inventories?.transaction?.purchase_data?.mrp;

  const productId = item.product_id;
  const id = item.id;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused()
  // Delete Single Cart Item

  const DeleteSingleItem = async () => {
    try {
      const {data} = await deleteSingleCartItem(id);
      setRender(true);
      dispatch(deleteSingleCartItem(productId));
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // Quantity Increment

  // Cart Update

  const handleCartUpdate = async()=>{
    try {
      const userData = {
        cart_id : item?.id,
        quantity: localQuantity ,
        priceable_quantity: localQuantity,
        slab_id: item.slab_id || 0,
        quantity_count: localQuantity
      }
    const {data} = await updateCart(userData)
    setUpdated(data?.data)
  }catch (error) {
    console.log("error",error.message)
  }
  }


  useEffect(() => {
    handleCartUpdate();
  }, [localQuantity]);

  // Increment

  // const increment = () => {
  //   setLocalQuantity(localQuantity + 1)
  // }


  // const decrement = () => {
  //   setLocalQuantity(localQuantity - 1)
  // }

 const increment = useCallback(() => {
    setLocalQuantity(localQuantity + 1);
    getCart()
  }, [localQuantity]);

  // Decrement

  const decrement = useCallback(() => {
   setLocalQuantity(localQuantity - 1)
    },[localQuantity],
  )
  

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
            <Text style={cartItemStyle.ourPriceText}>
              Our Price: ₹ {item.price}
            </Text>
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
              <TouchableOpacity
                onPress={() => {
                  decrement();
                }}>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../assets/images/minus.png')}
                />
              </TouchableOpacity>

              <Text style={{fontFamily: fonts.SemiBold}}>{localQuantity}</Text>
              <TouchableOpacity onPress={() => increment()}>
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
            <Text
              style={{fontFamily: fonts.SemiBold, fontSize: RFValue(11, 667)}}>
              {' '}
              ₹ {item.price} ={' '}
            </Text>
            <Text
              style={{fontFamily: fonts.SemiBold, fontSize: RFValue(11, 667)}}>
              {localQuantity * item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
