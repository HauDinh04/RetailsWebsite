import {createSlice} from "@reduxjs/toolkit";

const skinReducer = createSlice({
    name: 'skin',
    initialState: {
        isShowSkinCss: false,
    },
    reducers: {
        setSkin(state, action) {
            state.isShowSkinCss = action.payload;
        }
    }
})

export const {setSkin} = skinReducer.actions
export default skinReducer.reducer
