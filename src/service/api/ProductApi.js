import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BaseUrl = 'http://stagingapi.shreesaidarshan.com/api/';


export const getAllProducts = async ({limit,page}) => {
  try {
    const token = await AsyncStorage.getItem('TOKEN');
    
    const formData = new FormData();
    formData.append('limit', String(limit));
    // formData.append('page',page);
    formData.append('online', true);
    
    const res = await axios({
      method: 'post',
      url: `${BaseUrl}customer/find-product-all-v8`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return res;
  } catch (error) {
    console.log('Error from V8 API call', error);
    throw error;
  }
};


export const getSingleProduct = async (product_id)=>{
  const formData = new FormData()
  formData.append('product_id', product_id)
  try {
    const token = await AsyncStorage.getItem('TOKEN'); 

    const res = await axios({
      method:"post",
      url:`${BaseUrl}customer/find-product`,
      data:formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    return res;
  } catch (error) {
    console.log("error",error.response.data)
    throw error
  }
}
