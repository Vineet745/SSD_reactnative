import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    allProducts: [],
    selectedProduct: {},
    quantity:null
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = {...action.payload, quantity: 1};
    },

    increment: (state, action) => {
      if (action.payload) {
        state.selectedProduct.quantity += 1;
      }
    },
    decrement: state => {
      if (state.selectedProduct && state.selectedProduct.quantity > 0) {
        state.selectedProduct.quantity -= 1;
      }
    },
    singleProductAdd:(state,action)=>{
      state.allProducts.push(action.payload)
    }
  },
});

export const {setSelectedProduct, increment, decrement,singleProductAdd} = counterSlice.actions;
export default counterSlice.reducer;
