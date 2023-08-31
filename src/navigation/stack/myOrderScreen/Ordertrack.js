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
  const {params:{item}} = route
  const [singleOrder, setSingleOrder] = useState('')


// Getting single order Data

const handleSingleOrder = async()=>{
  try {
const {data} = await getSingleOrder(item.id)
setSingleOrder(data?.data?.data[0])

} catch (error) {
console.log("error",error)
}
}

useEffect(() => {
handleSingleOrder()
}, [])


if(!singleOrder){
  return null
}

  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.SemiBold,
        },
      }}>
      <Tab.Screen name="Order Info" component={OrderInfo}  initialParams={{singledata :singleOrder}} />
      <Tab.Screen name="Payment Info" component={PaymentInfo} initialParams={{singledata :singleOrder}}  />
      <Tab.Screen name="Items" component={Items} initialParams={{singledata :singleOrder}}/>
    </Tab.Navigator>
  );
};

export default Ordertrack;
