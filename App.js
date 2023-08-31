import { View, Text, Alert } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Appstack from './src/navigation/stack/Appstack'
import messaging from '@react-native-firebase/messaging'
import { getCart } from './src/service/api/CartApi'
import { useDispatch } from 'react-redux'
import { setCartProducts } from './src/redux/slice/cartSlice'
import {  getToken, notificationListener, requestUserPermission } from './src/utils/pushNotificationHelper'
const App = () => {
const [cart, setCart] = useState([])
const dispatch = useDispatch()


// Firebase Notification

useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}, []);

useEffect(() => {
  requestUserPermission();
  notificationListener();
  getToken()
}, [])



const handleGetCart = async () => {
  try {
    const {data} = await getCart('ONLINE')
    setCart(data?.data?.data)  
    // dispatch(setCartProducts(data?.data?.data))  
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}; 

useEffect(() => {
    handleGetCart();
}, []);




  return (
    <View style={{flex:1}}>
      <Appstack/>
    </View>
  )
}

export default App