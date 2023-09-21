import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../../service/instance';

export const fetchCart = createAsyncThunk('fetchCart', async () => {
  const token = await AsyncStorage.getItem('TOKEN');
  const ONLINE = 'ONLINE';
  try {
    const formData = new FormData();
    formData.append('type', ONLINE);
    const res = await instance.post('customer/get-cart', formData);
    console.log(res.data)

    // const res = await axios({
    //     method:"post",
    //     url:'http://stagingapi.shreesaidarshan.com/api/customer/get-cart',
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     data:formData
    // });
    return res.data;
  } catch (error) {
    console.log('error', error.response.data);
    throw error;
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartData: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.isLoader = false;
      state.cartData = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
