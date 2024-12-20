import {createSlice} from "@reduxjs/toolkit";

const noticeReducer = createSlice({
    name: 'account',
    initialState: {
        isShowCartNotice: false,
        isShowCompareNotice: false,
        isShowWishListNotice: false,
    },
    reducers: {
        setShowCartNotice(state) {
            state.isShowCartNotice = true;
        },
        setHiddenCartNotice(state) {
            state.isShowCartNotice = false;
        },
        setShowCompareNotice(state) {
            state.isShowCompareNotice = true;
        },
        setHiddenCompareNotice(state) {
            state.isShowCompareNotice = false;
        },
        setShowWishListNotice(state) {
            state.isShowWishListNotice = true;
        },
        setHiddenWishListNotice(state) {
            state.isShowWishListNotice = false;
        },
    }
})

export const {
    setShowCartNotice,
    setHiddenCartNotice,
    setShowCompareNotice,
    setHiddenCompareNotice,
    setShowWishListNotice,
    setHiddenWishListNotice
} = noticeReducer.actions
export default noticeReducer.reducer
