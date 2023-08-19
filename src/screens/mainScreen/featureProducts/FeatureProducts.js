import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../../utils/Theme';
import {getAllProducts} from '../../../service/api/ProductApi';
import ProductCard from '../../../components/productComponent/productsCard/ProductCard';

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 50;
  const isLoading = useRef(false);

  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    try {
      const {data} = await getAllProducts({limit, page});
      if (products.length > 0) {
        setProducts(prevProducts => [
          ...prevProducts,
          ...data?.data?.data.data,
        ]);
        setPage(prevPage => prevPage + 1);
      } else {
        setProducts(data?.data?.data.data);
      }
    } catch (error) {
      console.log('products Error', error);
    }
  };

  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <View>
            <ProductCard item={item} />
          </View>
        )}
        onEndReached={handleProducts}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default FeatureProducts;
