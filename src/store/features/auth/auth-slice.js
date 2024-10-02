import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  data: {
    _id: "",
    name: "",
    userType: "",
    whishList: [],
    lastLogin: "",
    mail:"",
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

        mail:""

      };
    },
    updateWhishList: (state, action) => {
      state.data.whishList = action.payload;
    },
    setUserData: (state, action) => {
      state.data = action.payload; // Set user details temporarily after fetching
    },
  },
});

export const { login, logout, updateWhishList, setUserData  } = authSlice.actions;
export default authSlice.reducer;
