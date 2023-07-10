// STORE
import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./auth";
import reviewReducer from './review'
import motelReducer from './motel'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        reviews: reviewReducer,
        motels: motelReducer
    }
})
