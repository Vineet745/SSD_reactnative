import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderInfo from './orderInfo/OrderInfo';
import PaymentInfo from './paymentInfo/PaymentInfo';
import Items from './items/Items';
import {fonts} from '../../../utils/Theme';
const Tab = createMaterialTopTabNavigator();

const Ordertrack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.SemiBold,
        },
      }}>
      <Tab.Screen name="Order Info" component={OrderInfo} />
      <Tab.Screen name="Payment Info" component={PaymentInfo} />
      <Tab.Screen name="Items" component={Items} />
    </Tab.Navigator>
  );
};

export default Ordertrack;
