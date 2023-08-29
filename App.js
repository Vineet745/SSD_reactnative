import { View, Text } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Appstack from './src/navigation/stack/Appstack'
import messaging from '@react-native-firebase/messaging'
import { getCart } from './src/service/api/CartApi'
import { useDispatch } from 'react-redux'
import { setCartProducts } from './src/redux/slice/cartSlice'
const App = () => {
const [cart, setCart] = useState([])
const dispatch = useDispatch()
//     useEffect(() => {
//        getDeviceToken()
//      }, [])
 
    
//  const getDeviceToken = async()=>{
//   let token = await messaging().getToken();
//   console.log(" Fcm token",token)
//  }
 
const handleGetCart = async () => {
  try {
    const {data} = await getCart('ONLINE')
    setCart(data?.data?.data)  
    dispatch(setCartProducts(data?.data?.data))  
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