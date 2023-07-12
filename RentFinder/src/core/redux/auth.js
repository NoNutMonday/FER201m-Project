import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    accounts: [],
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
        },
        
        setAccounts: (state, actions) => {
            state.accounts = actions.payload.accounts
        },

        updateAccount: (state, actions) => {
            const { id, status } = actions.payload
            const index = state.accounts.findIndex(item => item.id === id)
            state.accounts[index].status = status
        }
    }
})

export const { setToken, removeToken, setAccounts } = authSlice.actions

export default authSlice.reducer