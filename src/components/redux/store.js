import { configureStore } from "@reduxjs/toolkit";
import postReducer from './reducerSlice/postSlice'
import userReducer from './reducerSlice/userSlice'
import circularReducer from './reducerSlice/circularSlice'

const rootReducer = {
    posts: postReducer,
    users: userReducer,
    circular: circularReducer,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store