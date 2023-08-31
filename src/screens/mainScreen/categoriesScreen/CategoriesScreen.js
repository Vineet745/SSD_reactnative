import {View, Text, ScrollView, Modal, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoriesItem from '../../../components/categoriesComponent/categoriesItem/CategoriesItem';
import categoriesScreenStyle from './categoriesScreenStyle';
import {allcategories} from '../../../service/api/CategoryApi';
import Loader from '../../../utils/Loader';

const CategoriesScreen = () => {
  const [category, setCategory] = useState([]);
  const [loading,setloading] = useState(false)
  const handleCategory = async () => {
    try {
      setloading(true)
      const {data} = await allcategories();
      setCategory(data?.data);
      setloading(false)
    } catch (error) {
      console.log('Categories Fetched Error', error);
      setloading(false)
    }
  };

  useEffect(() => {
    handleCategory();
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Loader loading={loading}/>
      <ScrollView>
        <View style={categoriesScreenStyle.categoriesScreenMain}>
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
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
