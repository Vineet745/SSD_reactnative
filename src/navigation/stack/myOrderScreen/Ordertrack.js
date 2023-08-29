import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderInfo from '../../../screens/drawerScreen/orderTrack/orderInfo/OrderInfo';
import PaymentInfo from '../../../screens/drawerScreen/orderTrack/paymentInfo/PaymentInfo';
import Items from '../../../screens/drawerScreen/orderTrack/items/Items';
import {fonts} from '../../../utils/Theme';
const Tab = createMaterialTopTabNavigator();

const Ordertrack = ({route}) => {
  const { params: { singleOrderData } } = route;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.SemiBold,
        },
      }}>
      <Tab.Screen name="Order Info" component={OrderInfo}  initialParams={{singleOrderData:singleOrderData}} />
      <Tab.Screen name="Payment Info" component={PaymentInfo} initialParams={{singleOrderData:singleOrderData}}  />
      <Tab.Screen name="Items" component={Items} initialParams={{singleOrderData:singleOrderData}}/>
    </Tab.Navigator>
  );
};

export default Ordertrack;
