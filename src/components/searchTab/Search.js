import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils/Theme';
import {getAllProducts} from '../../service/api/ProductApi';
import searchStyle from './searchStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  
  const {navigate} = useNavigation();
  const [searchtab, setsearchtab] = useState('');
  const limit = 1;

  const searchhandle = async () => {
    try {
      const {data} = await getAllProducts({limit, product_name: searchtab});
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleTextChange = value => {
    setsearchtab(value);
    searchhandle();
  };

  return (

    <TouchableOpacity
      onPress={() => navigate('Search')}
      activeOpacity={1}
      style={searchStyle.SearchTabMain}>
      <Text style={{fontFamily: fonts.Bold}}>Search Products</Text>
      <Fontisto name="search" size={22} color="black" />
    </TouchableOpacity>
  );
};

export default Search;
