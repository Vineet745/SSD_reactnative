import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useSelector} from 'react-redux';
const baseUrl = 'http://stagingapi.shreesaidarshan.com/api/';

// Get Order Schedule


export const getOrderSchedule = async () => {
  const token = await AsyncStorage.getItem('TOKEN');
  try {
    const res = axios({
      method: 'get',
      url: `${baseUrl}customer/get-schedule`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

// Create Order

export const createOrder = async (userdata) => {
  const token = await AsyncStorage.getItem('TOKEN');
  const formData = new FormData()
  formData.append("total_amount",userdata.total)
  formData.append("payment_type",userdata.payment)
  formData.append("schedule_date",userdata.selectedSchedule)
  formData.append("schedule_time",userdata.selectedDate)

  
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/order-create`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};


// Get all orders

export const getAllOrders = async()=>{
  const token = await AsyncStorage.getItem('TOKEN');
  
    try {
      const res = await axios({
        method:'get',
        url: `${baseUrl}customer/all-get-order`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        
      return res;
    } catch (error) {
        console.log(error)
    }
}


//Get Single Order

export const getSingleOrder = async(orderId)=>{
  const token = await AsyncStorage.getItem('TOKEN');
  const formData = new FormData()
  formData.append("order_id",orderId)
  formData.append("type","ONLINE")
  try {
    const res = await axios({
      method:"post",
      url:`${baseUrl}customer/get-order`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',

      },
      data:formData
    })
    return res;
  } catch (error) {
    console.log("error",error)
  }
}