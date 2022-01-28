import { configureStore } from "@reduxjs/toolkit";
import postReducer from './reducerSlice/postSlice'
import userReducer from './reducerSlice/userSlice'
import commentReducer from './reducerSlice/commentPostSlice'

import circularReducer from './reducerSlice/circularSlice'

const rootReducer = {
    posts: postReducer,
    users: userReducer,
    circular: circularReducer,
    comments: commentReducer,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store