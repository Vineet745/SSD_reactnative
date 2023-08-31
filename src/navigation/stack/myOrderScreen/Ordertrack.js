import {View, Text} from 'react-native';
import React,{useState,useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderInfo from '../../../screens/drawerScreen/orderTrack/orderInfo/OrderInfo';
import PaymentInfo from '../../../screens/drawerScreen/orderTrack/paymentInfo/PaymentInfo';
import Items from '../../../screens/drawerScreen/orderTrack/items/Items';
import {fonts} from '../../../utils/Theme';
import { getSingleOrder } from '../../../service/api/OrderApi';

const Tab = createMaterialTopTabNavigator();

const Ordertrack = ({route}) => {
  
  console.log("singleOrderData",route)

// Getting single order Data

  

  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.SemiBold,
        },
      }}>
      <Tab.Screen name="Order Info" component={OrderInfo}  />
      <Tab.Screen name="Payment Info" component={PaymentInfo}  />
      <Tab.Screen name="Items" component={Items} />
    </Tab.Navigator>
  );
};

export default Ordertrack;
