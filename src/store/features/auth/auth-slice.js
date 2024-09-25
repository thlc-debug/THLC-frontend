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
  reducers: {},
});

export default authSlice.reducer;
