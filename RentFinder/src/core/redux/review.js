import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    page: 1,
    limit: 2,
    lastedReview: [],
    totalPage: 0
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
        },

        setTotalPage: (state, actions) => {
            state.totalPage = actions.payload.totalPage
        }


    }
})

export const { setReview, nextPage, loadMore, setLastedReview, setTotalPage } = reviewSlice.actions

export default reviewSlice.reducer