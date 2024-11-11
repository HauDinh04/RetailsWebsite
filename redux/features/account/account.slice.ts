import {createSlice} from "@reduxjs/toolkit";

const accountReducer = createSlice({
    name: 'account',
    initialState: {
        isLogin: false,
        user: {}
    },
    reducers: {
        initial() {
            localStorage.setItem('isLogin', JSON.stringify(false));
            localStorage.setItem('user', JSON.stringify({}));
        },
        setIsLogin(state, action) {
            state.isLogin = action.payload;
            localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
        },
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        getUserFromLocalStorage(state) {
            state.user = JSON.parse(localStorage.getItem("user") as string);
        },
        getIsLoginFromLocalStorage(state) {
            state.isLogin = JSON.parse(localStorage.getItem("isLogin") as string);
        }
    }
})

export const {
    setIsLogin,
    setUser,
    getUserFromLocalStorage,
    initial,
    getIsLoginFromLocalStorage
} = accountReducer.actions
export default accountReducer.reducer
