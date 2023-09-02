import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cartProducts: [], total: 0, length: 0},
  reducers: {
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },

    deleteSingleCartItem: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter(
        item => item.product_id !== productId,
      );
    },
    cartlength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const {
  setCartProducts,
  cartincrement,
  cartdecrement,
  deleteSingleCartItem,
  cartlength,
  cartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
