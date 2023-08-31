import {View, Text, ScrollView,FlatList} from 'react-native';
import React from 'react';
import OrderedItem from '../../../../components/orderdItem/OrderedItem';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';

const Items = ({route}) => {
  const {params:{singledata}} = route;
  const products = singledata ? singledata.total_products : [];


  


  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
      }}>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (         
              <OrderedItem item={item} />
          )}
        />
    </View>
  );
};

export default Items;
