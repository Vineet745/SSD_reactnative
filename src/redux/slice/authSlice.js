import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'Users',
  initialState: {usertoken: null, profile: '', stateId: 0, cityId: 0},
  reducers: {
    registerUser: (state, action) => {
      state.usertoken = action.payload;
    },
    loginUser: (state, action) => {
      state.usertoken = action.payload;
    },
    VerifyWithOtp: (state, action) => {
      state.usertoken = action.payload;
    },
    userdata: (state, action) => {
      state.profile = action.payload;
    },
    selectedStateId: (state, action) => {
      state.stateId = action.payload;
    },
    selectedCityId: (state, action) => {
      state.cityId = action.payload;
    },
  },
});

export const {
  registerUser,
  loginUser,
  VerifyWithOtp,
  userdata,
  selectedStateId,
  selectedCityId,
} = authSlice.actions;

export default authSlice.reducer;
