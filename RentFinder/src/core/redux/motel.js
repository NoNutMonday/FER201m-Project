import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    motels: [],
    latests: []
}

export const motelSlice = createSlice({
    name: 'motels',
    initialState,
    reducers: {
        setMotels: (state, actions) => {
            state.motels = actions.payload.motels
        },
        setLatests: (state, actions) => {
            state.latests = actions.payload.latests
        }
    }
})

export const { setMotels, setLatests } = motelSlice.actions

export default motelSlice.reducer