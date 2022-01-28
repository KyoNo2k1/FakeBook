import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'

export const comment = createAsyncThunk(
    "posts/comment",
    async(data, { rejectWithValue }) => {
        const response = await api.comment(data)
        if (response?.data?.data == null) {
            return rejectWithValue(response);
        }
        return response?.data?.data
    }
);

const comments = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: "loading",
    },
    extraReducers: {
        [comment.pending]: (state, action) => {
            state.status = "COMMENT_LOADING"
        },
        [comment.fulfilled]: (state, action) => {
            state.status = "COMMENT_SUCCESS"
            state.comments.unshift(action.payload.data)
        },
        [comment.rejected]: (state, action) => {
            state.status = "COMMENT_FAILED"
        },
        // [currentLikePost.pending]: (state, action) => {
        //     state.statusLike = "LIKE_LOADING"
        // },
        // [currentLikePost.fulfilled]: (state, action) => {
        //     state.statusLike = "LIKE_SUCCESS"
        //     state.likeList = action.payload
        // },
        // [currentLikePost.rejected]: (state, action) => {
        //     state.statusLike = "LIKE_FAILED"
        // },
    },
    reducers: {
        
    }
})

const { reducer, actions } = comments
// export const {  } = actions
export default reducer

