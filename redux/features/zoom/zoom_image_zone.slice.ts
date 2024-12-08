import {createSlice} from "@reduxjs/toolkit";

const zoomImageZoneReducer = createSlice({
    name: 'skin',
    initialState: {
        isShowZoomImageZone: false,
        imageArray: ['/images/product-1.jpg'] as string[],
    },
    reducers: {
        setIsShowZoomImage(state, action) {
            state.isShowZoomImageZone = action.payload;
        },
        setImageArray(state, action) {
            state.imageArray = [
                ...action.payload,
                ...state.imageArray,
            ];
        }
    }
})

export const {setIsShowZoomImage, setImageArray} = zoomImageZoneReducer.actions
export default zoomImageZoneReducer.reducer
