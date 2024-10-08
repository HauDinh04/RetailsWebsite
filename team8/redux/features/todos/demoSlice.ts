import {createSlice} from "@reduxjs/toolkit";

const demoReducer = createSlice({
    name: 'demo',
    initialState: {
        isDemo: true,
    },
    reducers: {
        setIsDemo(state, action) {
            state.isDemo = action.payload;
        },
    }
})

export const {setIsDemo} = demoReducer.actions
export default demoReducer.reducer
