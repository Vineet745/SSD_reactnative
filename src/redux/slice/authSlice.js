import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
name:'Users',
initialState:{usertoken:null},
reducers:{
    registerUser:(state,action)=>{
         state.usertoken = action.payload
    },
    loginUser:(state,action)=>{
        state.usertoken = action.payload
   },
   loginWithOtp:(state,action)=>{
     state.usertoken = action.payload
}
}


}) 

export const {registerUser,loginUser,loginWithOtp} = authSlice.actions

export default authSlice.reducer