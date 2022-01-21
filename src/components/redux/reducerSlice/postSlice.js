import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const createPost = createAsyncThunk(
    "posts/createPost",
    async(data, { rejectWithValue }) => {
        const response = await api.createPost(data)
        if (response.data == null) {
            return rejectWithValue(response);
        }
        return response?.data
    }
);

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async(data, { rejectWithValue }) => {
        const response = await api.getPosts()
        if (response?.data?.result == null) {
            return rejectWithValue(response);
        }
        return response?.data?.result;
    }
);
export const likePost = createAsyncThunk(
    "posts/likePost",
    async(data, { rejectWithValue }) => {
        const response = await api.likePost(data)
        if (response?.data) {
            return rejectWithValue(response);
        }
        return response?.data;
    }
);
export const currentLikePost = createAsyncThunk(
    "posts/currentLikePost",
    async(emailUser, { rejectWithValue }) => {
        const response = await api.currentLikePost()
        if (!response) {
            return rejectWithValue(response);
        }
        return response?.data?.result;
    }
);

const posts = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: "loading",
        statusLike:"",
        likeList:[],
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = "LOADING"
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = "SUCCESS"
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.status = "FAILED"
        },
        [createPost.pending]: (state, action) => {
            state.status = "LOADING"
        },
        [createPost.fulfilled]: (state, action) => {
            state.status = "CREATE_SUCCESS"
            state.posts.unshift(action.payload.data)
        },
        [createPost.rejected]: (state, action) => {
            state.status = "FAILED"
        },
        [likePost.pending]: (state, action) => {
            state.statusLike = "LIKE_LOADING"
        },
        [likePost.fulfilled]: (state, action) => {
            state.statusLike = "LIKE_SUCCESS"
        },
        [likePost.rejected]: (state, action) => {
            state.statusLike = "LIKE_FAILED"
        },
        [currentLikePost.pending]: (state, action) => {
            state.statusLike = "LIKE_LOADING"
            console.log("err pending current like post");
        },
        [currentLikePost.fulfilled]: (state, action) => {
            state.statusLike = "LIKE_SUCCESS"
            console.log(action.payload);
            state.likeList = action.payload
        },
        [currentLikePost.rejected]: (state, action) => {
            state.statusLike = "LIKE_FAILED"
        },
    },
    reducers: {
        reload: (state, action) => {
            state.status= "SUCCESS"
        }
    }
})

const { reducer, actions } = posts
export const { reload } = actions
export default reducer

