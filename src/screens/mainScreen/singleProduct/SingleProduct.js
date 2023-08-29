import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Modal, ActivityIndicator} from 'react-native';
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
import { addCart, getCart } from '../../../service/api/CartApi';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setSelectedProduct, singleProductAdd } from '../../../redux/slice/counterSlice';
import { cartlength } from '../../../redux/slice/cartSlice';

const SingleProduct = ({route, navigation}) => {

  const {selectedProduct} = useSelector(state=>state.counter)

  const {params: {productId}} = route;
  const dispatch = useDispatch()

  const [singledata, setSingledata] = useState('');
  const [loading, setloading] = useState(false)

   useEffect(() => {
    handleGetSingleProduct();
  }, []);


  // Get SingleProduct

  const handleGetSingleProduct = async () => {
    try {
      setloading(true)
      const {data} = await getSingleProduct(productId);
      setSingledata(data?.data?.data[0]);
      setloading(false)
    } catch (error) {
      console.log('error', error);
      setloading(false)
      throw error;
    }
  };




// Add to cart



const handleAddToCart = async()=>{
  try {

    const userdata = {
      batch_number:singledata.inventoriess?.[0]?.batch_id,
      inventory_id:singledata.inventoriess?.[0]?.transaction?.inventory_id,
      quantity:selectedProduct.quantity,
      quantity_count:selectedProduct.quantity,
      priceable_quantity:selectedProduct.quantity,
      price:singledata?.inventoriess?.[0]?.transaction.purchase_data?.default_price,
      unit_price:singledata?.inventoriess?.[0]?.transaction.purchase_data?.default_price,
      product_type:singledata.packing_type,
      product_type_id:singledata.inventoriess?.[0]?.transaction?.purchase_id,
      unit_quantity:selectedProduct.quantity,
      slab_id: singledata.inventoriess?.[0]?.transaction?.purchase_data?.product_slab,
      type:"ONLINE"

    }
    const data = await addCart({userdata})
    dispatch(singleProductAdd(data?.data?.data))
  } catch (error) {
    console.log(error)
  }
}


// const Mrp = singledata?.inventoriess[0]?.transaction?.purchase_data?.mrp
  return (
    <ScrollView>

      {/* //Modal */}
      <Modal visible={loading} transparent={true} animationType="none">
        <View style={categoriesScreenStyle.modalContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>



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
          paddingVertical: verticalScale(10),
          backgroundColor: 'white',
        }}>
        <View style={singleProductStyle.priceDescription}>
          <View style={singleProductStyle.leftView}>
            <View style={singleProductStyle.price_offer}>
              <Text style={singleProductStyle.price_offer_textone}>
              M.R.P.: ₹ {singledata?.inventoriess?.[0]?.transaction?.purchase_data?.mrp}
              </Text>
              

              <Text style={singleProductStyle.price_offer_Discount}>
                20% Off
              </Text>
            </View>
            <Text
              style={[
                singleProductStyle.price_offer_textone,
                {marginTop: verticalScale(5), fontSize: RFValue(14, 667)},
              ]}>
              Our Price: ₹ {singledata?.inventoriess?.[0]?.transaction?.purchase_data?.default_price}
            </Text>
          </View>
          <View style={singleProductStyle.quantityWrapper}>
            <TouchableOpacity onPress={()=>dispatch(decrement(productId))}>
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
              {selectedProduct.quantity}
            </Text>
            <TouchableOpacity onPress={()=>{
              dispatch(increment(productId)) 
            }}>
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
        <View>
        <TouchableOpacity onPress={()=>handleAddToCart()} activeOpacity={1} style={singleProductStyle.Addbutton}>
          <Text style={{color:colors.white,fontFamily:fonts.Bold}}>Add to cart</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;
