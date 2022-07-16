import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../app/api.js";

import firebase, { db, auth } from "../../Auth/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const login = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    const response = await api.signIn(data);
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
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (arrUserThird, { rejectWithValue }) => {
    const response = await api.getUsers();
    console.log(response);
    if (!response) {
      return rejectWithValue(response);
    }
    return response?.data?.data;
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
    users: [],
    arrUsers: [],
    status: null,
    statusSignUp: null,
    statusRefToken: null,
    statusUsers: null,
    exp: null,
    isLoginThird: null,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
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
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.user = action.payload.data;
      state.exp = action.payload.exp;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
    },
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.user = action.payload.data;
      state.exp = action.payload.exp;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getUsers.pending]: (state, action) => {
      state.statusUsers = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.statusUsers = "success";
      state.users = [action.payload];
      console.log(action.payload);
      // const userRef = collection(db, "users");
      // if (auth.currentUser) {
      //   const q = query(
      //     userRef,
      //     where("uid", "not-in", [auth.currentUser.uid])
      //   );
      //   onSnapshot(q, (querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       console.log(doc.data());
      //       state.users = [...state.users, doc.data()];
      //     });
      //     // state.users = arrUsers;
      //   });
      // } else {
      //   const q = query(userRef);
      //   onSnapshot(q, (querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       console.log(doc.data());
      //       state.users = [...state.users, doc.data()];
      //     });
      //     // state.users = arrUsers;
      //     // const newArrNotUser = arrUsers.filter(
      //     //   (data) => data.email !== state.email
      //     // );
      //     // console.log(arrUsers, newArrNotUser);
      //   });
      // }
    },
    [getUsers.rejected]: (state, action) => {
      state.statusUsers = "failed";
    },
  },
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      if (action.payload) {
        db.collection("users").doc(action.payload).update({
          isOnline: false,
        });
      }
      firebase.auth().signOut();
      state.user = null;
      state.isLoginThird = false;
    },
    loginThird: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.user = action.payload.data;
    },
    isLogin: (state, action) => {
      state.status = "done";
      state.isLoginThird = false;
    },
    isSignUp: (state, action) => {
      state.statusSignUp = "done";
    },
    isLoginThird: (state, action) => {
      state.isLoginThird = true;
    },
    updateUsers: (state, action) => {
      state.arrUsers = action.payload;
    },
  },
});

const { reducer, actions } = user;
export const {
  logout,
  loginThird,
  isLogin,
  isLoginThird,
  isSignUp,
  updateUsers,
} = actions;
export default reducer;
