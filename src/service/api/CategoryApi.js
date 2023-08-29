import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'http://stagingapi.shreesaidarshan.com/api/';
import axios from "axios"

// Categories with the limit

export const getCategories = async ({page, limit}) => {
  const token = await AsyncStorage.getItem('TOKEN');
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.get(
    `${baseUrl}customer/get-categories?page=${page}&limit=${limit}`,
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

  return axios.get(`${baseUrl}customer/get-categories`, {headers});
};


export const subCategory = async()=>{
  const token = await AsyncStorage.getItem('TOKEN')
  const res = await axios({
    method:"get",
    url:`${baseUrl}customer/get-subcategories?categories_id=`
  })
}