import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import productCardStyle from './productCardStyle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedProduct} from '../../../redux/slice/counterSlice';

const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  // Activities
  const {navigate} = useNavigation();
  const ProductId = item?.customer_inventories.batch.product_id;
  const Mrp = item?.customer_inventories?.transaction?.purchase_data?.mrp
  const OurPrice = item?.customer_inventories?.transaction?.purchase_data?.default_price
  const MarginPrice = Mrp - OurPrice
  const offerPrice = (MarginPrice/Mrp)*100


  const onpress = () => {
    dispatch(setSelectedProduct(item));
    navigate('Product', {productId: ProductId, item: item});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => onpress()}
        style={productCardStyle.productCardMain}>
        <View style={productCardStyle.imageHolder}>
          <Image source={require('../../../assets/images/product_img.png')} />
        </View>

        <View style={productCardStyle.detailHolder}>
          <Text style={productCardStyle.titleText}>
            {item?.product_name.substring(0, 25)}....
          </Text>

          <Text style={productCardStyle.productType}>SNACKS</Text>

          <View style={productCardStyle.MrpView}>
            <View style={productCardStyle.MrpViewFirsttextContainer}>
              <Text style={productCardStyle.MrpText}>M.R.P. : ₹ {Mrp}</Text>
            </View>
            <Text style={productCardStyle.offerText}> {offerPrice.toFixed(0)}% Off</Text>
          </View>

          <View style={productCardStyle.ourPrice}>
            <Text style={productCardStyle.ourPriceText}>Our Price: {OurPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
