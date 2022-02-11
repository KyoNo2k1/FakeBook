import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const login = createAsyncThunk(
    "users/login",
    async(data, { rejectWithValue }) => {
        const response = await api.signIn(data)
        if (response == null) {
            return rejectWithValue(response);
        }
        return response?.data
    }
);
export const signup = createAsyncThunk(
    "users/signup",
    async(data, { rejectWithValue }) => {
        const response = await api.signUp(data)
        if (response?.data?.data == null) {
            return rejectWithValue(null);
        }
        return response?.data
    }
)
export const refreshToken = createAsyncThunk(
    "users/refreshToken",
    async(refreshToken, { rejectWithValue }) => {
        const response = await api.refToken(refreshToken)
        if (response?.data == null) {
            return rejectWithValue(null);
        }
        return response?.data
    }
)
const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null,
        statusRefToken: null,
        exp: null,
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.status = "loading"
        },
        [login.fulfilled]: (state, action) => {
            state.status = "success"
            console.log(action.payload);
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.user = action.payload.data
            state.exp = action.payload.exp
        },
        [login.rejected]: (state, action) => {
            state.status = "failed"
        },
        [signup.fulfilled]: (state, action) => {
            state.status = "success"
            alert('Tạo tài khoản thành công')
        },
        [signup.rejected]: (state, action) => {
            state.status = "failed"
            alert('Tài khoản đã tồn tại!')
        },
        [refreshToken.fulfilled]: (state, action) => {
            state.statusRefToken = "success"
            var newValue = JSON.parse(localStorage.getItem('profile'))
            newValue.token = action.payload.accessToken
            newValue.exp = action.payload.exp
            state.exp= action.payload.exp
            localStorage.setItem('profile', JSON.stringify(newValue))
        },
        [refreshToken.rejected]: (state, action) => {
            state.statusRefToken = "failed"
        },
    },
    reducers: {
        getUser: (state, action) =>{
            state.user = action.payload
        },
        logout: (state, action) => {
            localStorage.clear()
            state.user = null
        },
    }
})

const { reducer, actions } = user
export const { logout,getUser } = actions
export default reducer

