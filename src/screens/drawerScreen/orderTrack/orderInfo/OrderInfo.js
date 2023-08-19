import {View, Text} from 'react-native';
import React from 'react';
import OrderText from '../../../../components/orderText/OrderText';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';

const OrderInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: verticalScale(15),
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
      }}>
      <OrderText heading="Order No." text="123ORD7890" />
      <OrderText heading="Date & Time of Order" text="26 Aug 2021 | 10:53 am" />
      <OrderText heading="Order Status" text="Waiting for Delivery" />
      <OrderText heading="ETA of Delivery" text="28 Aug 2021 | 10:00 am" />
      <OrderText
        heading="Loyalty Points Earning after Order Completion"
        text="13"
      />
    </View>
  );
};

export default OrderInfo;
