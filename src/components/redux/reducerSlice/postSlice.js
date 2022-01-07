import { createSlice } from "@reduxjs/toolkit";

const post = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
})

const { reducer, actions } = post
export const {addPost} = actions
export default reducer