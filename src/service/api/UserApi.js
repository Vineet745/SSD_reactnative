  import axios from 'react-native-axios';

  const BaseUrl = 'http://stagingapi.shreesaidarshan.com/api/';


// Register User

  export const RegisterUser = async (userdata) => {
    try {
        const res = await axios({
        method: 'post',
        url: `${BaseUrl}customer/customer-app-register`,
        data: userdata,
      });
      return res;
    } catch (error) {
      console.log('Error While Registration', error);
      throw error;
    }
  };


  //Login User With Password


  export const LoginUser = async (userCred) => {
    try {
        const res = await axios({
        method: 'post',
        url: `${BaseUrl}customer/customer-app-login`,
        data: userCred, 
      });
      return res;
    } catch (error) {
      console.log('Error While Login', error);
      throw error;
    }
  };


  // Login With Otp


  export const LoginWithOtp = async(mobile)=>{
    try {
      const res = await axios({
        method:'post',
        url:`${BaseUrl}customer/login-with-otp`,
        body:mobile
      });
       
    return res;
    } catch (error) {
      console.log('Error',error)
    }
  }
