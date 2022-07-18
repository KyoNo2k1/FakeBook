import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../app/api.js";

export const comment = createAsyncThunk(
  "comments/comment",
  async (data, { rejectWithValue }) => {
    const response = await api.comment(data);
    console.log(response?.data?.data);
    if (response?.data?.data == null) {
      return rejectWithValue("null");
    }
    return response?.data?.data;
  }
);
export const currentCommentPost = createAsyncThunk(
  "comments/currentCommentPost",
  async (data, { rejectWithValue }) => {
    const response = await api.getCommentByPage(data);
    if (response?.data?.result == null) {
      return rejectWithValue(response);
    }
    return response?.data?.result;
  }
);

const comments = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "loading",
    statusPost: "loading",
  },
  extraReducers: {
    [comment.pending]: (state, action) => {
      state.statusPost = "COMMENT_LOADING";
    },
    [comment.fulfilled]: (state, action) => {
      state.statusPost = "COMMENT_SUCCESS";
      state.comments.push(action.payload);
    },
    [comment.rejected]: (state, action) => {
      state.statusPost = "COMMENT_FAILED";
    },
    [currentCommentPost.pending]: (state, action) => {
      state.status = "GETCOMMENT_LOADING";
    },
    [currentCommentPost.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.status = "GETCOMMENT_SUCCESS";
    },
    [currentCommentPost.rejected]: (state, action) => {
      state.status = "GETCOMMENT_FAILED";
    },
  },
  reducers: {},
});

const { reducer } = comments;
// export const {  } = actions
export default reducer;
