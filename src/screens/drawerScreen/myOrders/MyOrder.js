import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import myOrderStyle from './myOrderStyle';
import {fonts} from '../../../utils/Theme';
import {verticalScale} from '../../../utils/Dimension';
import {getAllOrders, getSingleOrder} from '../../../service/api/OrderApi';
import { useNavigation } from '@react-navigation/native';

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [singleOrderData,setsingleOrderData] = useState('')
const navigation = useNavigation();

  // Get all orders
  const handleGetAllOrders = async () => {
    try {
      const {data} = await getAllOrders();
      setOrderData(data?.data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleGetAllOrders();
  }, []);


  // Single Orders

  const handleSingleOrder = async(orderId)=>{
    
    try {
      const {data} = await getSingleOrder(orderId)
      setsingleOrderData(data?.data?.data[0])
   } catch (error) {
    console.log("error",error)
  }
  }

 
  

  return (
    <View style={myOrderStyle.wholePage}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orderData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>{
              handleSingleOrder(item?.total_products[0]?.order_id);
              navigation.navigate('Orders', {singleOrderData});

            }
            }
              
            activeOpacity={1}
            style={{marginVertical: verticalScale(10)}}>
            <View style={myOrderStyle.MainBox}>
              <View style={myOrderStyle.leftBox}>
                <View>
                  <View style={myOrderStyle.topTextContainer}>
                    <Text style={myOrderStyle.orderText}>Order Id: </Text>
                    <Text style={myOrderStyle.orderId}>
                      {item?.total_products[0]?.order_id}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontFamily: fonts.Medium,
                      marginTop: verticalScale(5),
                      color: 'black',
                    }}>
                    {item.order_delivery_status[0].created_at}
                  </Text>
                </View>

                <View style={myOrderStyle.bottomTextContainer}>
                  <Text style={myOrderStyle.orderText}>Order Amount:</Text>
                  <Text style={myOrderStyle.orderId}>
                    {' '}
                    ₹ {item.total_amount}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={myOrderStyle.statusText}>
                  {item.order_delivery_status[0].order_statuses.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyOrder;
