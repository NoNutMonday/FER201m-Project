import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    motels: [],
    latests: [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : []
}

export const motelSlice = createSlice({
    name: 'motels',
    initialState,
    reducers: {
        setMotels: (state, actions) => {
            state.motels = actions.payload.motels
        },

        updateMotel: (state, actions) => {
            const { id, status } = actions.payload
            const index = state.motels.findIndex(item => item.id === id)
            state.motels[index].status = status
        },

        setLatests: (state, actions) => {
            state.latests = actions.payload.latests
        },
        getWishlist: (state) => {
            const wishlist = JSON.parse(localStorage.getItem('wishlist'))
            if (wishlist) {
                state.wishlist = wishlist
            }
        },
        setWishlist: (state, actions) => {
            state.wishlist = actions.payload.wishlist
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
        removeWishlist: (state, actions) => {
            const index = state.wishlist.findIndex(item => item.id === actions.payload.id)
            state.wishlist.splice(index, 1)
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },

        addWishlist: (state, actions) => {
            state.wishlist = [...state.wishlist, actions.payload.motel]
            console.log(state.wishlist)
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        }
    }
})

export const { setMotels, setLatests, setWishlist, removeWishlist, addWishlist, getWishlist, updateMotel } = motelSlice.actions

export default motelSlice.reducer