import {View, Text} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../../../utils/Dimension';
import OrderText from '../../../../components/orderText/OrderText';

const PaymentInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: verticalScale(15),
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
      }}>
      <OrderText heading="Total Amount Paid" text="₹ 2,998.00" />
      <OrderText heading="Payment Method" text="Cash on Delivery" />
      <OrderText heading="Payment Status" text="Waiting" />
      <OrderText heading="Payment Transaction Id" text="N/A" />
      <OrderText heading="Bill/Receipt No." text="N/A" />
      <View style={{borderWidth: 0.2, borderColor: '#bfcbdf3'}}></View>
      <OrderText heading="Loyalty Point Redeemed" text="150" />
      <OrderText heading="Coupon Applied" text="FRCOF123" />
    </View>
  );
};

export default PaymentInfo;
