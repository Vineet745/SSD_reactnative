import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken()
  }
}


const GetFCMToken=async()=>{
    let fcmtoken =await AsyncStorage.getItem("fcmtoken")
    console.log(fcmtoken,"old token")
    if(!fcmtoken){

        try {
            let fcmtoken = messaging().getToken();
            if(fcmtoken){
               await AsyncStorage.setItem("fcmtoken",fcmtoken)
            }
            
        } catch (error) {
            console.log(error,"error in fcmtoken")
        }
    }
}