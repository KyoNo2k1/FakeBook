import { createSlice } from "@reduxjs/toolkit";
import * as api from '../../../app/api.js'


const user = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        signup: async (state , action) => {
            const { data } = await api.signUp(action.payload)

            localStorage.setItem('profile', JSON.stringify({...data}))
        },
        signin: async (state, action) => {
            const { data } = await api.signIn(action.payload)

            localStorage.setItem('profile', JSON.stringify({...data}))
        },
        logout: (state, action) => {
            localStorage.clear()
        },
    }
})

const { reducer, actions } = user
export const { signup, signin } = actions
export default reducer