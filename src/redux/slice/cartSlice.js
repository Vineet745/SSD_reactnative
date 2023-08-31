import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cartProducts: [], total: 0,length:0},
  reducers: {
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload
    },
    // cartincrement: (state, action) => {
    //   const product = state.cartProducts.find(
    //     item => item.product_id === action.payload,
    //   );

    //   product.quantity += 1;
    //   const productIndex = state.cartProducts.findIndex(
    //     item => item.product_id === action.payload,
    //   );
    //   state.cartProducts[productIndex] = product;
    // },


    // cartdecrement: (state, action) => {
    //   const product = state.cartProducts.find(
    //     item => item.product_id === action.payload,
    //   );
    //   product.quantityCount -= 1;
    //   const productIndex = state.cartProducts.findIndex(
    //     item => item.product_id === action.payload,
    //   );
    //   state.cartProducts[productIndex] = product;
    // },

    deleteSingleCartItem: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter(
        item => item.product_id !== productId,
      );
    },
    cartlength:(state,action)=>{
       state.length = action.payload
    }

    // cartTotal: (state, action) => {
    //   state.total = action.payload;
    // },
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
