import {
  View,
  Text,
  TextInput,
  FlatList,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fonts} from '../../utils/Theme';
import searchScreenStyle from './searchScreenStyle';
import {horizontalScale, verticalScale} from '../../utils/Dimension';
import ProductCard from '../../components/productComponent/productsCard/ProductCard';
import {getAllProducts} from '../../service/api/ProductApi';

const SearchScreen = () => {
  const [searchtab, setsearchtab] = useState('');
  const [searchData, setsearchData] = useState([]);
  const [loading, setloading] = useState(false);
  const limit = 30;

  const searchhandle = async () => {
    try {
      setloading(true);
      const {data} = await getAllProducts({limit, product_name: searchtab});
      setsearchData(data?.data?.data?.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
      throw error;
    }
  };

  const handleTextChange = value => {
    setsearchtab(value);
    if (searchtab.length >= 3) {
      searchhandle();
    }
  };

  const handleClear = async () => {
    setsearchtab('');
  };

  return (
    <View style={{flex: 1}}>
      <Modal visible={loading} transparent={true} animationType="none">
        <View style={categoriesScreenStyle.modalContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>
      <View style={searchScreenStyle.SearchTabMain}>
        <TextInput
          value={searchtab}
          onChangeText={handleTextChange}
          placeholder="Search Products"
          style={{
            fontFamily: fonts.Bold,
            width: horizontalScale(300),
          }}
        />
        {searchtab.length ? (
          <TouchableOpacity onPress={handleClear}>
            <AntDesign name="close" size={30} />
          </TouchableOpacity>
        ) : (
          <Fontisto name="search" size={22} color="black" />
        )}
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          paddingVertical: verticalScale(10),
          paddingHorizontal: horizontalScale(15),
        }}>
        {searchData && searchData.length > 0 ? (
          <View>
            <Text
              style={{
                paddingVertical: verticalScale(10),
                fontFamily: fonts.Medium,
                color: 'black',
              }}>
              {searchData.length} items found for search result "{searchtab}"
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchData}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => (
                <View>
                  <ProductCard item={item} />
                </View>
              )}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SearchScreen;
