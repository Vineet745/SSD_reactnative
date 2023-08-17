import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import categoryCardStyle from './categoryCardStyle';

const CategoriesItem = ({text, backgroundColor}) => {
  return (
    <TouchableOpacity>
    <View
      style={[categoryCardStyle.cardmain, {backgroundColor: backgroundColor}]}>
      <Text style={categoryCardStyle.cardtext}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default CategoriesItem;
