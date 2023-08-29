import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../../components/productComponent/productsCard/ProductCard';
import {getAllProducts} from '../../../service/api/ProductApi';
import {colors} from '../../../utils/Theme';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';

const Categorydata = ({route}) => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [page, setPage] = useState(1);

  const {category} = route.params;
  const limit = 150;

  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    try {
      const {data} = await getAllProducts({category, limit});
      if (categoryProduct.length > 0) {
        setCategoryProduct(prevProducts => [
          ...prevProducts,
          ...data?.data?.data.data,
        ]);
        setPage(prevPage => prevPage + 1);
      } else {
        setCategoryProduct(data?.data?.data.data);
      }
    } catch (error) {
      console.log('products Error', error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(15),
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categoryProduct}
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

export default Categorydata;
