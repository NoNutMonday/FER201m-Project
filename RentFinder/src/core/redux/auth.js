import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

export const authSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, actions) => {
            console.log(`token: ${state.token}`)
            console.log(`actions.payload.token: ${actions.payload.token}`)  
            state.token = actions.payload.token 
        },
        removeToken: (state) => {
            state.token = null
        }
    }
})

export const { setToken, removeToken } = authSlice.actions

export default authSlice.reducer