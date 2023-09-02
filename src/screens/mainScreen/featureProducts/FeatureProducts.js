import {
  View,
  Text,
  ScrollView,
  // FlatList,
  ActivityIndicator,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../../utils/Theme';
import {getAllProducts} from '../../../service/api/ProductApi';
import ProductCard from '../../../components/productComponent/productsCard/ProductCard';
import categoriesScreenStyle from '../categoriesScreen/categoriesScreenStyle';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';
const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    try {
      setloading(true);
      const {data} = await getAllProducts({limit, page});
      if (products.length > 0) {
        setProducts(prevProducts => [
          ...prevProducts,
          ...data?.data?.data.data,
        ]);
        setPage(prevPage => prevPage + 1);
        setloading(false);
      } else {
        setProducts(data?.data?.data.data);
        setloading(false);
      }
    } catch (error) {
      console.log('products Error', error);
      setloading(false);
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(10),
      }}>
      <Modal visible={loading} transparent={true} animationType="none">
        <View style={categoriesScreenStyle.modalContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>

      <FlatList
      showsVerticalScrollIndicator={false}
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
