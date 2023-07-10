import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    page: 1,
    limit: 2,
    lastedReview: []
}

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReview: (state, actions) => {
            state.reviews = actions.payload.reviews
        },

        nextPage: state => {
            state.page = state.page + 1
        },

        loadMore: (state, actions) => {
            state.reviews = [...state.reviews, ...actions.payload.reviews]
        },

        setLastedReview: (state, actions) => {
            state.lastedReview = actions.payload.lastedReview
        }

    }
})

export const { setReview, nextPage, loadMore, setLastedReview } = reviewSlice.actions

export default reviewSlice.reducer