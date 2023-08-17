import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import cartItemStyle from './cartItemStyle';
import {fonts} from '../../utils/Theme';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CartItem = () => {
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
          <TouchableOpacity style={{marginBottom: verticalScale(20)}}>
            <AntDesign
              name="close"
              size={25}
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>

          {/* {Title Text} */}
          <Text style={cartItemStyle.titleText}>
            Maggie Noodles - Small (100gm)
          </Text>

          <View style={cartItemStyle.MrpView}>
            <View style={cartItemStyle.MrpViewFirsttextContainer}>
              <Text style={cartItemStyle.MrpText}>M.R.P. : 15.00</Text>
              <View style={cartItemStyle.strikeLine}></View>
            </View>
            <Text style={cartItemStyle.offerText}> 20% Off</Text>
            <Text style={cartItemStyle.ourPriceText}>Our Price: 12.75</Text>
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
              <TouchableOpacity>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../assets/images/minus.png')}
                />
              </TouchableOpacity>
              <Text style={{fontFamily: fonts.SemiBold}}>01</Text>
              <TouchableOpacity>
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
            <Text style={{fontFamily: fonts.SemiBold}}> ₹ 12.75 = </Text>
            <Text style={{fontFamily: fonts.SemiBold}}> ₹ 25.50 </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
