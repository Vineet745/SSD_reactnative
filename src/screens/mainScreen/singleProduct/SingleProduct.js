import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import {colors, fonts} from '../../../utils/Theme';
import singleProductStyle from './singleProductStyle';
import SingleSwiper from '../../../components/SingleSwiper';
import {RFValue} from 'react-native-responsive-fontsize';
import {getSingleProduct} from '../../../service/api/ProductApi';

const SingleProduct = ({route, navigation}) => {
  const {
    params: {productId},
  } = route;
  const [singledata, setSingledata] = useState('');
  const [productCount, setProductCount] = useState('');

  useEffect(() => {
    handleGetSingleProduct();
  }, []);

  const handleGetSingleProduct = async () => {
    try {
      const {data} = await getSingleProduct(productId);
      console.log('singledata', data?.data?.data[0]);
      setSingledata(data?.data?.data[0]);
      console.log('this is the file', singledata?.file);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };

  return (
    <ScrollView>
      {/* 1st View */}
      <View style={{flex: 1}}>
        <View style={{paddingVertical: verticalScale(10)}}>
          <SingleSwiper Images={singledata?.file} />
        </View>

        <View
          style={{
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(20),
          }}>
          <Text style={{fontFamily: fonts.SemiBold, color: colors.black}}>
            {singledata.print_name}
          </Text>
          <Text
            style={{marginTop: verticalScale(4), fontFamily: fonts.SemiBold}}>
            SNACKS
          </Text>
        </View>
      </View>

      {/* 2nd View */}
      <View
        style={{
          paddingHorizontal: horizontalScale(20),
          marginVertical: verticalScale(5),
          backgroundColor: 'white',
        }}>
        <View style={singleProductStyle.priceDescription}>
          <View style={singleProductStyle.leftView}>
            <View style={singleProductStyle.price_offer}>
              <Text style={singleProductStyle.price_offer_textone}>
                M.R.P. :₹ 15.00{' '}
              </Text>
              <Text style={singleProductStyle.price_offer_Discount}>
                20% Off{' '}
              </Text>
            </View>
            <Text
              style={[
                singleProductStyle.price_offer_textone,
                {marginTop: verticalScale(5), fontSize: RFValue(14, 667)},
              ]}>
              Our Price: ₹ 12.75
            </Text>
          </View>
          <View style={singleProductStyle.quantityWrapper}>
            <TouchableOpacity>
              <Image
                style={{
                  width: horizontalScale(30),
                  height: verticalScale(30),
                }}
                source={require('../../../assets/images/minus.png')}
              />
            </TouchableOpacity>
            <Text
              style={{fontFamily: fonts.SemiBold, fontSize: RFValue(14, 667)}}>
              {productCount}
            </Text>
            <TouchableOpacity>
              <Image
                style={{
                  width: horizontalScale(30),
                  height: verticalScale(30),
                }}
                source={require('../../../assets/images/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>
            Product Description
          </Text>
          <Text style={singleProductStyle.productDetail}>
            {singledata.describtion}
          </Text>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>
            Free Item/Gift with the Product
          </Text>
          <Text style={singleProductStyle.productDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <View style={singleProductStyle.productDescription}>
          <Text style={singleProductStyle.productDescriptionHeading}>
            Discount on Quantity
          </Text>
          <Text style={singleProductStyle.productDetail}>
            - Buy 10 unit & save ₹ 0.75 per unit.
          </Text>
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
