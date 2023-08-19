import {View, Text} from 'react-native';
import React from 'react';
import orderTextstyle from './orderTextstyle';

const OrderText = ({heading, text}) => {
  return (
    <View style={orderTextstyle.orderMain}>
      <View style={orderTextstyle.orderMainInner}>
        <View style={orderTextstyle.childView}>
          <Text style={orderTextstyle.childHeadings}>{heading}</Text>
          <Text style={orderTextstyle.childText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderText;
