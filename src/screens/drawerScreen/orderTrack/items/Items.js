import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import OrderedItem from '../../../../components/orderdItem/OrderedItem';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';

const Items = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
      </ScrollView>
    </View>
  );
};

export default Items;
