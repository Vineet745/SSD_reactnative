import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import categoryStyle from './categoryStyle';
import {colors, fonts} from '../../../utils/Theme';
import CategoriesItem from '../categoriesItem/CategoriesItem';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../../../service/api/CategoryApi';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const {navigate} = useNavigation();

  // For the Api's

  const page = 2;
  const limit = 5;

  // Get Category

  const handleCategory = async () => {
    try {
      const {data} = await getCategories({page, limit});
      setCategory(data.data.data);
    } catch (error) {
      console.log('Categories Fetched Error', error);
    }
  };

  useEffect(() => {
    handleCategory();
  }, []);

  return (
    <View style={categoryStyle.categoryMain}>
      <View style={categoryStyle.categoryMainTop}>
        <Text style={{fontFamily: fonts.SemiBold}}>Top Categories</Text>
        <TouchableOpacity onPress={() => navigate('Categories')}>
          <Text style={{fontFamily: fonts.SemiBold, color: colors.skyblue}}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={categoryStyle.categoryList}>
        {category.map((item, index) => {
          return (
            <CategoriesItem
              key={index}
              item={item}
              backgroundColor={'#f59f9f'}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Categories;
