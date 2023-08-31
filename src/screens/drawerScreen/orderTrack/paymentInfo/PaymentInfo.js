import {View, Text} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';
import OrderText from '../../../../components/orderText/OrderText';

const PaymentInfo = ({route}) => {
  const {params:{singledata}} = route

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: verticalScale(15),
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
      }}>
      <OrderText heading="Total Amount Paid" text={singledata.total_amount}/>
      <OrderText heading="Payment Method" text="Cash on Delivery" />
      <OrderText heading="Payment Status" text="Waiting" />
      <OrderText heading="Payment Transaction Id" text="N/A" />
      <OrderText heading="Bill/Receipt No." text="N/A" />
      
    </View>
  );
};

export default PaymentInfo;
