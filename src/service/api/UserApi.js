import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://stagingapi.shreesaidarshan.com/api/';
// Register User

export const RegisterUser = async userdata => {
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/customer-app-register`,
      data: userdata,
    });
    return res;
  } catch (error) {
    console.log('Error While Registration', error);
    throw error;
  }
};

//Login User With Password

export const LoginUser = async userCred => {
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/customer-app-login`,
      data: userCred,
    });
    return res;
  } catch (error) {
    console.log('Error While Login', error);
    throw error;
  }
};

// Login With Otp

export const LoginWithOtp = async mobile => {
  try {

    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/login-with-otp`,
      data: mobile,
    });

    return res;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};

// User Verify With Otp

export const verifyUserWithOtp = async userdata => {
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/customer-app-verify-otp`,
      data: userdata,
    });
    return res;
  } catch (error) {
    console.log('Error while Verifying Customer', error);
  }
};

// User Living  State

export const getState = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: `${baseUrl}state`,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// User Living  City

export const getCity = async state_id => {
  try {
    const res = await axios({
      method: 'get',
      url: `${baseUrl}city?state_id=${state_id}`,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get Detail From Pincode

export const getPincode = async pincode => {
  try {
    const token = await AsyncStorage.getItem('TOKEN');

    const res = await axios({
      method: 'get',
      url: `${baseUrl}customer/pincode/${pincode}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

// User data

export const getUserProfile = async () => {
  const token = await AsyncStorage.getItem('TOKEN');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const res = await axios({
      method: 'get',
      url: `${baseUrl}customer/get-customer`,
      headers,
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

// Get All Address

export const getAllAddress = async ({userProfile}) => {
  const token = await AsyncStorage.getItem('TOKEN');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const res = await axios({
      method: 'get',
      url: `${baseUrl}customer/get-multiple-address-pincode/customer/${userProfile.id}`,
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Set Address

export const addAddress = async (userdata, userProfile) => {
  const token = await AsyncStorage.getItem('TOKEN');

  const formData = new FormData();
  formData.append('address[0]', userdata.address);
  formData.append('landmark[0]', userdata.landmark);
  formData.append('customer_id', userProfile.id);
  formData.append('state[0]', userdata.stateId.stateId);
  formData.append('city[0]', userdata.cityId);
  formData.append('pincode[0]', userdata.pincode);
  // formData.append('address[1]', userdata.address);
  // formData.append('pincode[1]', userdata.address);
  // formData.append('landmark[1]', userdata.address);
  // formData.append('state[1]', userdata.address);
  // formData.append('city[1]', userdata.address);

  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/multiple-address-pincode`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};
