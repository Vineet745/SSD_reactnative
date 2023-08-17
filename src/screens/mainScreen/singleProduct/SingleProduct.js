import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { horizontalScale, verticalScale } from '../../../utils/Dimension';
import { fonts } from '../../../utils/Theme';
import singleProductStyle from './singleProductStyle';
import SingleSwiper from '../../../components/SingleSwiper';
import { RFValue } from 'react-native-responsive-fontsize';

const SingleProduct = () => {
  return (
    <ScrollView>
      {/* 1st View */}
      <View style={{flex:1,height:verticalScale(320) }}>
      </View>

      {/* 2nd View */}
      <View
        style={{
          paddingHorizontal: horizontalScale(20),
          marginVertical: verticalScale(5),
        }}>
        <View style={singleProductStyle.priceDescription}>
          <View style={singleProductStyle.leftView}>
            <View style={singleProductStyle.price_offer}>
              <Text style={singleProductStyle.price_offer_textone}>M.R.P. :₹ 15.00 </Text>
              <Text style={singleProductStyle.price_offer_Discount}>20% Off </Text>
            </View>
            <Text style={[singleProductStyle.price_offer_textone,{marginTop:verticalScale(5),fontSize:RFValue(14,667)}]}>Our Price: ₹ 12.75</Text>
          </View>
          <View style={singleProductStyle.quantityWrapper}>
            <TouchableOpacity>
              <Image
                style={{
                  width: horizontalScale(25),
                  height: verticalScale(25),
                }}
                source={require('../../../assets/images/plus.png')}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: fonts.SemiBold,fontSize:RFValue(14,667) }}>01</Text>
            <TouchableOpacity>
              <Image
                style={{
                  width: horizontalScale(25),
                  height: verticalScale(25),
                }}
                source={require('../../../assets/images/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>Product Description</Text>
          <Text style={singleProductStyle.productDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo consectetur at incidunt dolores eligendi enim
            aperiam quis perferendis possimus cupiditate! Quam ea
            provident quo molestias fugiat, doloribus suscipit quia
            nesciunt illum in totam, qui voluptate sunt et temporibus
            illo culpa sequi harum excepturi ipsa labore?
          </Text>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>Free Item/Gift with the Product</Text>
          <Text style={singleProductStyle.productDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>Discount on Quantity</Text>
          <Text style={singleProductStyle.productDetail}>
            - Buy 10 unit & save ₹ 0.75 per unit.
          </Text >
          <Text style={singleProductStyle.productDetail}>
            - Buy 10 unit & save ₹ 0.75 per unit.
          </Text>
          <Text style={singleProductStyle.productDetail}>
            - Buy 10 unit & save ₹ 0.75 per unit.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;
