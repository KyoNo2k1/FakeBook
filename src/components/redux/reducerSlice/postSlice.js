import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const createPost = createAsyncThunk(
    "posts/createPost",
    async(data, { rejectWithValue }) => {
        const response = await api.createPost(data)
        if (response.data == null) {
            return rejectWithValue(response);
        }
        return response?.data?.data
    }
);

export const getPost = createAsyncThunk(
    "posts/getPost",
    async(postId, { rejectWithValue }) => {
        const response = await api.getPost(postId)
        if (response?.data?.result == null) {
            return rejectWithValue(response);
        }
        return response?.data?.result;
    }
);

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async(page, { rejectWithValue }) => {
        const response = await api.getPosts(page)
        if (response?.data?.result.length === 0) {
            return rejectWithValue(response?.data);
        }
        return response?.data;
    }
);
export const likePost = createAsyncThunk(
    "posts/likePost",
    async(data, { rejectWithValue }) => {
        const response = await api.likePost(data)
        console.log(response);
        if (response?.data) {
            return rejectWithValue(response);
        }
        return response?.data;
    }
);
export const currentLikePost = createAsyncThunk(
    "posts/currentLikePost",
    async(emailUser, { rejectWithValue }) => {
        const response = await api.currentLikePost(emailUser)
        if (!response?.data?.result) {
            return rejectWithValue(response);
        }
        return response?.data?.result;
    }
);
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async(id, { rejectWithValue }) => {
        const response = await api.deletePost(id)
        if (!response?.data?.result) {
            return rejectWithValue(response);
        }
        return ({
            data: response?.data?.result,
            postId: id
        })
    }
);
export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async(data, { rejectWithValue }) => {
        const response = await api.updatePost(data)
        if (response?.data?.result == null) {
            return rejectWithValue(response);
        }
        return response?.data?.result
    }
);
export const authorPost = createAsyncThunk(
    "posts/authorPost",
    async(postId, { rejectWithValue }) => {
        const response = await api.isAuthor(postId)
        if (!response) {
            return rejectWithValue(response);
        }
        return response;
    }
);

const posts = createSlice({
    name: 'posts',
    initialState: {
        status: "loading",
        statusCreate: "loading",
        statusLike:"",
        statusDelete: "loading",
        statusCheckAuthor: "loading",
        post: null,
        postCreated: null,
        posts: [],
        postUpdated: null,
        likeList:[],
        checkAuthor: [],
        limit: null,
        isAuthor: false
    },
    extraReducers: {
        [getPost.fulfilled]: (state, action) => {
            state.post = action.payload
        },
        [getPosts.pending]: (state, action) => {
            state.status = "LOADING"
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = "SUCCESS"
            state.posts = action.payload.result
            state.limit = action.payload.limit
        },
        [getPosts.rejected]: (state, action) => {
            state.status = "FAILED"
            state.posts = []
        },
        [createPost.pending]: (state, action) => {
            state.statusCreate = "LOADING"
        },
        [createPost.fulfilled]: (state, action) => {
            state.statusCreate = "CREATE_SUCCESS"
            state.posts.unshift(action.payload)
        },
        [createPost.rejected]: (state, action) => {
            state.statusCreate = "FAILED"
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
        },
        [currentLikePost.fulfilled]: (state, action) => {
            state.statusLike = "LIKE_SUCCESS"
            state.likeList = action.payload
        },
        [currentLikePost.rejected]: (state, action) => {
            state.statusLike = "LIKE_FAILED"
        },
        [authorPost.pending]: (state, action) => {
            state.statusCheckAuthor = "LOADING"
        },
        [authorPost.fulfilled]: (state, action) => {
            state.statusCheckAuthor = "SUCCESS"
            // state.posts.unshift(action.payload.data)
        },
        [authorPost.rejected]: (state, action) => {
            state.statusCheckAuthor = "FAILED"
        },
        [deletePost.pending]: (state, action) => {
            state.statusDelete = "LOADING"
        },
        [deletePost.fulfilled]: (state, action) => {
            state.statusDelete = action.payload.data
            state.posts = state.posts.filter(post => post.id !== action.payload.postId)
            state.statusDelete = "SUCCESS"
        },
        [deletePost.rejected]: (state, action) => {
            state.statusDelete = "FAILED"
        },
        [updatePost.fulfilled]: (state, action) => {
            state.post = action.payload
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

