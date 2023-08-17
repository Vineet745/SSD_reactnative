import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';
const BaseUrl = 'http://stagingapi.shreesaidarshan.com/api/';

// Categories with the limit

export const getCategories = async ({page, limit}) => {
  const token = await AsyncStorage.getItem('TOKEN');
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.get(
    `${BaseUrl}customer/get-categories?page=${page}&limit=${limit}`,
    {headers},
  );
};

// All categories

export const allcategories = async () => {
  const token = await AsyncStorage.getItem('TOKEN');
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.get(`${BaseUrl}customer/get-categories`, {headers});
};
