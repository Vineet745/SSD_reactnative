import { createSlice } from "@reduxjs/toolkit";
export const categorySlice = createSlice({
    name:"category",
    initialState:{categoryName:null},
    reducers:{
      getCategoryName:(state,action)=>{
        state.categoryName=action.payload
      }
    }
})

export const {getCategoryName} = categorySlice.actions
export default categorySlice.reducer