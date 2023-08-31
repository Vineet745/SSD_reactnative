import {View, Text} from 'react-native';
import React from 'react';
import OrderText from '../../../../components/orderText/OrderText';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';

const OrderInfo = ({route}) => {
  
  const {params:{singledata}} = route

  
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: verticalScale(15),
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
      }}>
      <OrderText heading="Order No." text={singledata.order_number} />
      <OrderText heading="Date & Time of Order" text={singledata?.final_order_details[0].created_at}/>
      <OrderText heading="Order Status" text={singledata?.total_products[0].status}/>
      <OrderText heading="ETA of Delivery" text={singledata.schedule_date} />
      <OrderText
        heading="Loyalty Points Earning after Order Completion"
        text="13"
      />
    </View>
  );
};

export default OrderInfo;
