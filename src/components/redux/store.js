import { configureStore } from "@reduxjs/toolkit";
import postReducer from './reducerSlice/postSlice'
import userReducer from './reducerSlice/userSlice'

const rootReducer = {
    posts: postReducer,
    users: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store