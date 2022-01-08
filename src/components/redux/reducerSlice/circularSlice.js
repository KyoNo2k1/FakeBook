import { createSlice } from "@reduxjs/toolkit";

const circular = createSlice({
    name: 'circular',
    initialState: [],
    reducers: {
        startLoading: async (state, action) => {
            console.log(state);
            return action.payload = true
        },
        endLoading: async (state, action) => {
            return action.payload = false
        }
    }
})

const { reducer, actions } = circular
export const { startLoading, endLoading } = actions
export default reducer