import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native';
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
import {addCart, getCart} from '../../../service/api/CartApi';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  setSelectedProduct,
  singleProductAdd,
} from '../../../redux/slice/counterSlice';
import {setCartProducts} from '../../../redux/slice/cartSlice';
import Loader from '../../../utils/Loader';

const SingleProduct = ({route, navigation}) => {
  
  const [singledata, setSingledata] = useState('');
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const images = require("../../../assets/images/product_img.png")
  
  const {
    params: {productId},
  } = route;
  const {selectedProduct} = useSelector(state => state.counter);
  const dispatch = useDispatch();

 
  // Calculate off percentage
  const Mrp = singledata?.inventoriess?.[0]?.transaction?.purchase_data?.mrp
  const ourPrice = singledata?.inventoriess?.[0]?.transaction?.purchase_data
  ?.default_price
  const marginPrice = Mrp - ourPrice
  const off = (marginPrice/Mrp)*100






  // Get Single Product

  useEffect(() => {
    handleGetSingleProduct();
  }, []);

  // /////////////////////////////////////////////////////////////////////////////////////

  const handleGetSingleProduct = async () => {
    try {
      setloading(true);
      const {data} = await getSingleProduct(productId);
      setSingledata(data?.data?.data[0]);
      setloading(false);
    } catch (error) {
      console.log('error', error);
      setloading(false);
      throw error;
    }
  };




//  Cart
useEffect(() => {
  handleGetCart()
}, [])



  const handleGetCart = async () => {
    try {
      const {data} = await getCart('ONLINE');
      setCart(data?.data?.data);
      dispatch(setCartProducts(data?.data?.data));
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };


  // Check Product Slab

  const productSlab =
    singledata.inventoriess?.[0]?.transaction?.purchase_data?.product_slab;


  
  const calculatePrice = () => {
    let price = 0;

    if (productSlab) {
      productSlab.forEach(item => {
        if (
          selectedProduct.quantity >= item.slab_min_value &&
          (item.slab_max_value === 0 ||
            selectedProduct.quantity <= item.slab_max_value)
        ) {
          price = item.selling_price;
        }
      });
    }
    return price;
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setPrice(calculatedPrice);
  }, [selectedProduct.quantity]);

  // const slagablePrice = {productSlab?}




  // Add to cart

  const handleAddToCart = async () => {
    try {
      const userdata = {
        batch_number: singledata.inventoriess?.[0]?.batch_id,
        inventory_id: singledata.inventoriess?.[0]?.transaction?.inventory_id,
        quantity: selectedProduct.quantity,
        quantity_count: selectedProduct.quantity,
        priceable_quantity: selectedProduct.quantity,
        price: price
          ? price
          : singledata?.inventoriess?.[0]?.transaction.purchase_data
              ?.default_price,
        unit_price: price
          ? price
          : singledata?.inventoriess?.[0]?.transaction.purchase_data
              ?.default_price,
        product_type: singledata.packing_type,
        product_type_id: singledata.inventoriess?.[0]?.transaction?.purchase_id,
        unit_quantity: selectedProduct.quantity,
        slab_id:
          singledata.inventoriess?.[0]?.transaction?.purchase_data
            ?.product_slab,
        type: 'ONLINE',
      };
      const data = await addCart({userdata});
      handleGetCart();
      dispatch(singleProductAdd(data?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };


// Check Product In cart


const handleCheckCart = () => {
  let isProductInCart = false;

  cart.forEach((item) => {
    if (item.product_id === singledata.id) {
      isProductInCart = true;
    }
  });

  if (isProductInCart) {
    Alert.alert('Item is already in the cart');
  } else {
    handleAddToCart();
  }
};




  return (
    <ScrollView>
      
      {/* //Loader */}

      <Loader loading={loading}/>

      {/* 1st View */}
      <View style={{flex: 1}}>
        <View style={{paddingVertical: verticalScale(10)}}>
          <SingleSwiper Images={images} />
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
                M.R.P.: ₹{' '}
                {Mrp}
              </Text>

              <Text style={singleProductStyle.price_offer_Discount}>
                {off.toFixed(0)}% Off
              </Text>
            </View>
            <Text
              style={[
                singleProductStyle.price_offer_textone,
                {marginTop: verticalScale(5), fontSize: RFValue(14, 667)},
              ]}>
              Our Price: ₹{' '}
              {
                ourPrice
              }
            </Text>
          </View>
          <View style={singleProductStyle.quantityWrapper}>
            <TouchableOpacity onPress={() => dispatch(decrement(productId))}>
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
            <TouchableOpacity
              onPress={() => {
                dispatch(increment(productId));
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
          <TouchableOpacity
            onPress={() => handleCheckCart()}
            activeOpacity={1}
            style={singleProductStyle.Addbutton}>
            <Text style={{color: colors.white, fontFamily: fonts.Bold}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;
