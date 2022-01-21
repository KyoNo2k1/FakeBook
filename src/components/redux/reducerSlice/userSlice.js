import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const login = createAsyncThunk(
    "users/getUser",
    async(data, { rejectWithValue }) => {
        const response = await api.signIn(data)
        if (response == null) {
            return rejectWithValue(response);
        }
        return response?.data
    }
);
export const signup = createAsyncThunk(
    "users/createUser",
    async(data, { rejectWithValue }) => {
        const response = await api.signUp(data)
        if (response?.data?.data == null) {
            return rejectWithValue(null);
        }
        return response?.data
    }
)

const user = createSlice({
    name: 'user',
    initialState: {
        user: {},
        status: null
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.status = "loading"
        },
        [login.fulfilled]: (state, action) => {
            state.status = "success"
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.user = action.payload.data
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
    },
    reducers: {
        logout: (state, action) => {
            localStorage.clear()
            state.user = null
        },
    }
})

const { reducer, actions } = user
export const { logout } = actions
export default reducer

