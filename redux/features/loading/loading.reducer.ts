import {createSlice} from "@reduxjs/toolkit";

const loadingReducer = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
})

export const {setIsLoading} = loadingReducer.actions
export default loadingReducer.reducer;
