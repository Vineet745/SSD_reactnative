const baseUrl = 'http://stagingapi.shreesaidarshan.com/api/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Getting Cart Value

export const getCart = async ONLINE => {
  try {
    const token = await AsyncStorage.getItem('TOKEN');
    const formData = new FormData();
    formData.append('type', ONLINE);

    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/get-cart`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return res;
  } catch (error) {
    console.log('error on online', error);
    // throw error;
  }
};

// Add Cart

export const addCart = async ({userdata}) => {
  try {
    const token = await AsyncStorage.getItem('TOKEN');
    const formData = new FormData();
    formData.append('batch_no[0]', userdata.batch_number);
    formData.append('inventory_id[0]', userdata.inventory_id);
    formData.append('quantity[0]', userdata.quantity);
    formData.append('quantity_count[0]', userdata.quantity);
    formData.append('priceable_quantity[0]', userdata.priceable_quantity);
    formData.append('price[0]', userdata.price);
    formData.append('unit_price[0]', userdata.unit_price);
    formData.append('product_type[0]', userdata.product_type);
    formData.append('product_type_id[0]', userdata.product_type_id);
    formData.append('unit_quantity[0]', userdata.unit_quantity);
    formData.append('slab_id[0]', userdata.slab_id);
    formData.append('type[0]', 'ONLINE');

    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/add-to-cart`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async(userdata)=>{
  const token = await AsyncStorage.getItem('TOKEN');
  const formData = new FormData();
  formData.append('cart_id', userdata.cart_id);
  formData.append("quantity",userdata.quantity);
  formData.append("priceable_quantity",userdata.priceable_quantity);
  formData.append("slab_id",userdata.slab_id)
  formData.append("quantity_count",userdata.quantity_count);
  try {
    const res = await axios ({
      method: "post",
      url: `${baseUrl}customer/update-cart`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
    return res;
  } catch (error) {
    console.log("error",error.data)
    throw error;
  }
}




// Delete Single Cart

export const deleteSingleCartItem = async (id) => {
  const token = await AsyncStorage.getItem('TOKEN');
  const formData = new FormData();
  formData.append('cart_id', id);
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}customer/delete-cart`,
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


// DeleteCart

export const deleteCart = async()=>{
  const token = await AsyncStorage.getItem('TOKEN');
  try {
    const res = await axios({
      method:"post",
      url:`${baseUrl}customer/delete-cart`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    return res;
  } catch (error) {
    console.log("error",error)
  }
}