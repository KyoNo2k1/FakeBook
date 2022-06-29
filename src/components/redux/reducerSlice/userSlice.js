import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../app/api.js";
import firebase from "../../Auth/firebase/config";

export const login = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await api.signIn(data);
    console.log(response);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response?.data;
  }
);
export const signup = createAsyncThunk(
  "users/signup",
  async (data, { rejectWithValue }) => {
    const response = await api.signUp(data);
    if (response?.data?.data == null) {
      return rejectWithValue(null);
    }
    return response?.data;
  }
);
export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (refreshToken, { rejectWithValue }) => {
    const response = await api.refToken(refreshToken);
    if (response?.data == null) {
      return rejectWithValue(null);
    }
    return response?.data;
  }
);
const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
    statusSignUp: null,
    statusRefToken: null,
    exp: null,
    loginThird: null,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.user = action.payload.data;
      state.exp = action.payload.exp;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
    },
    [signup.fulfilled]: (state, action) => {
      state.statusSignUp = "success";
    },
    [signup.rejected]: (state, action) => {
      state.statusSignUp = "failed";
    },
    [refreshToken.fulfilled]: (state, action) => {
      state.statusRefToken = "success";
      var newValue = JSON.parse(localStorage.getItem("profile"));
      newValue.token = action.payload.accessToken;
      newValue.exp = action.payload.exp;
      state.exp = action.payload.exp;
      localStorage.setItem("profile", JSON.stringify(newValue));
    },
    [refreshToken.rejected]: (state, action) => {
      state.statusRefToken = "failed";
    },
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      localStorage.clear();
      firebase.auth().signOut();
      state.user = null;
    },
    loginThird: (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },
    isLogin: (state, action) => {
      state.status = "done";
    },
    isSignUp: (state, action) => {
      state.statusSignUp = "done";
    },
    isLoginThird: (state, action) => {
      state.loginThird = true;
    },
  },
});

const { reducer, actions } = user;
export const { logout, getUser, loginThird, isLogin, isLoginThird, isSignUp } =
  actions;
export default reducer;
