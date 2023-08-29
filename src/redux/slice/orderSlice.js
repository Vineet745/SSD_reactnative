import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name:"order",
    initialState:{selectedDate:null},
    reducers:{
        selectDate:(state,action)=>{
            state.selectedDate = action.payload
        }
    }

})

export const {selectDate} = orderSlice.actions;
export default orderSlice.reducer;
