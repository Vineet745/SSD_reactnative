import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://stagingapi.shreesaidarshan.com/api/';

export const getAllProducts = async ({limit, category, product_name}) => {
  try {
    const token = await AsyncStorage.getItem('TOKEN');

    const formData = new FormData();
    formData.append('limit', String(limit));
    formData.append('online', true);
    category && formData.append('category', category);
    product_name && formData.append('product_name', product_name);

    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/find-product-all-v8`,
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

// GetSingleProduct

export const getSingleProduct = async product_id => {
  const formData = new FormData();
  formData.append('product_id', product_id);
  try {
    const token = await AsyncStorage.getItem('TOKEN');

    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/find-product`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (error) {
    console.log('error', error.response.data);
    throw error;
  }
};

// GetSearchApi
