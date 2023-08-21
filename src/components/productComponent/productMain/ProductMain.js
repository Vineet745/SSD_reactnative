import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import productMainstyle from './productMainstyle';
import {colors, fonts} from '../../../utils/Theme';
import ProductCard from '../productsCard/ProductCard';
import {useNavigation} from '@react-navigation/native';
import {getAllProducts} from '../../../service/api/ProductApi';

const ProductMain = ({title, touchableButton}) => {
  const limit = 6;
  const [products, setProducts] = useState([]);
  const handleProducts = async () => {
    try {
      const {data} = await getAllProducts({limit});
      setProducts(data?.data.data.data);
    } catch (error) {
      console.log('products Error', error);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  const {navigate} = useNavigation();
  return (
    <View style={productMainstyle.productsMain}>
      <TouchableOpacity>
        <View style={productMainstyle.productsTopView}>
          <Text style={productMainstyle.productsMainText}>{title}</Text>
          <TouchableOpacity onPress={() => navigate('Featured Products')}>
            <Text style={{fontFamily: fonts.SemiBold, color: colors.skyblue}}>
              {touchableButton}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={productMainstyle.productCardHolder}>
          {products.map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductMain;
