import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoriesItem from '../../../components/categoriesComponent/categoriesItem/CategoriesItem';
import categoriesScreenStyle from './categoriesScreenStyle';
import {allcategories} from '../../../service/api/CategoryApi';

const CategoriesScreen = () => {
  const [category, setCategory] = useState([]);
  const handleCategory = async () => {
    try {
      const {data} = await allcategories();
      setCategory(data?.data);
    } catch (error) {
      console.log('Categories Fetched Error', error);
    }
  };

  useEffect(() => {
    handleCategory();
  }, []);

  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <ScrollView>
        <View style={categoriesScreenStyle.categoriesScreenMain}>
          {category.map((item, index) => {
            return (
              <CategoriesItem
                key={index}
                text={item.name}
                backgroundColor={'#f59f9f'}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
