import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import counterSlice from './slice/counterSlice';
import cartSlice from './slice/cartSlice';
import orderSlice from './slice/orderSlice';
import categorySlice from './slice/categorySlice';
import productSlice from './slice/productSlice';



export const store = configureStore({
    reducer: {
    user: authSlice,
    counter: counterSlice,
    cart: cartSlice,
    order: orderSlice,
    category:categorySlice,
    product:productSlice
  },
});

