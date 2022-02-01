import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const comment = createAsyncThunk(
    "posts/comment",
    async(data, { rejectWithValue }) => {
        const response = await api.comment(data)
        if (response?.data?.data == null) {
            return rejectWithValue("null");
        }
        return response?.data?.data
    }
);
export const currentCommentPost = createAsyncThunk(
    "posts/commentPost",
    async(postId, { rejectWithValue }) => {
        const response = await api.getCommentPost(postId)
        if (response?.data?.result == null) {
            return rejectWithValue(response);
        }
        return response?.data?.result
    }
);

const comments = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: "loading",
        statusPost: "loading",
    },
    extraReducers: {
        [comment.pending]: (state, action) => {
            state.statusPost = "COMMENT_LOADING"
        },
        [comment.fulfilled]: (state, action) => {
            state.statusPost = "COMMENT_SUCCESS"
            state.comments.unshift(action.payload.data)
        },
        [comment.rejected]: (state, action) => {
            state.statusPost = "COMMENT_FAILED"
        },
        [currentCommentPost.pending]: (state, action) => {
            state.status = "GETCOMMENT_LOADING"
        },
        [currentCommentPost.fulfilled]: (state, action) => {
            state.status = "GETCOMMENT_SUCCESS"
            state.comments = action.payload
        },
        [currentCommentPost.rejected]: (state, action) => {
            state.status = "GETCOMMENT_FAILED"
        },
    },
    reducers: {
        
    }
})

const { reducer, actions } = comments
// export const {  } = actions
export default reducer

