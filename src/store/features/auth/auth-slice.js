import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  data: {
    _id: "",
    name: "",
    userType: "",
    whishList: [],
    lastLogin: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.data = action.payload.data;
    },
    logout: (state) => {
      state.token = null;
      state.data = {
        _id: "",
        name: "",
        userType: "",
        whishList: [],
        lastLogin: "",
      };
    },
    updateWhishList: (state, action) => {
      state.data.whishList = action.payload;
    },
  },
});

export const { login, logout, updateWhishList } = authSlice.actions;

export default authSlice.reducer;
