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
      <OrderText heading="Order No." text="{singleOrderData?.order_number}" />
      <OrderText heading="Date & Time of Order" text="{singleOrderData?.final_order_details[0].created_at}"/>
      <OrderText heading="Order Status" text="{singleOrderData.order_delivery_status[0].order_statuses.name}" />
      <OrderText heading="ETA of Delivery" text="28 Aug 2021 | 10:00 am" />
      <OrderText
        heading="Loyalty Points Earning after Order Completion"
        text="13"
      />
    </View>
  );
};

export default OrderInfo;
