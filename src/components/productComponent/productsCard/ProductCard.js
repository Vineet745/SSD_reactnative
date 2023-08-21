import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import productCardStyle from './productCardStyle';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';
import {fonts} from '../../../utils/Theme';
import { useNavigation } from '@react-navigation/native';


const ProductCard = ({item}) => {
  // console.log("item hai",item.customer_inventories.product_id)
  const {navigate} = useNavigation()
  const ProductId = item.customer_inventories.product_id
  return (
    <View>
      <TouchableOpacity onPress={()=>navigate('Product',{productId:ProductId})}
        style={productCardStyle.productCardMain}>
        <View style={productCardStyle.imageHolder}>
          <Image source={require('../../../assets/images/product_img.png')} />
        </View>
        <View style={productCardStyle.detailHolder}>
          <Text style={productCardStyle.titleText}>
            {item.product_name.substring(0,25)}....
          </Text>
          <Text style={productCardStyle.productType}>SNACKS</Text>
          <View style={productCardStyle.MrpView}>
            <View style={productCardStyle.MrpViewFirsttextContainer}>
              <Text style={productCardStyle.MrpText}>M.R.P. : ₹ 15.00</Text>
              <View style={productCardStyle.strikeLine}></View>
            </View>
            <Text style={productCardStyle.offerText}> 20% Off</Text>
          </View>
          <View style={productCardStyle.ourPrice}>
            <Text style={productCardStyle.ourPriceText}>Our Price: 12.75</Text>
            <View style={productCardStyle.quantityWrapper}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../../assets/images/plus.png')}
                />
              </TouchableOpacity>
              <Text style={{fontFamily: fonts.SemiBold}}>01</Text>
              <TouchableOpacity>
                <Image
                  style={{
                    width: horizontalScale(25),
                    height: verticalScale(25),
                  }}
                  source={require('../../../assets/images/plus.png')}
                />
              </TouchableOpacity>
              {/* <Text>01</Text> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
