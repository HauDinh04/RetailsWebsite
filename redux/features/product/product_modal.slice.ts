import {fetchProductDetail} from '@/lib/ProductsDetail.action';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showProductModal = createAsyncThunk<any, any>(
    'productModal/showProductModal',
    async (productId: number, {rejectWithValue}) => {
        try {
            const res = await fetchProductDetail(productId);

            if (!res) {
                return {
                    thumbnail_url: "/images/sua_tuoi_horizon_organic.webp",
                    images: [
                        "/images/792f11308ba03ae698ec8c42eedbff80.jpg",
                        "/images/premium_photo-1669652639337-c513cc42ead6.jpg",
                        "/images/fa8e8d_795310e1890c45d89b2ac85172faad72~mv2.webp",
                        "/images/2b054882609bbaf6728aca0368212c14.jpg",
                        "/images/product-2.jpg",
                        "/images/product-2.jpg"
                    ],
                    name: "Sunt Molup",
                    description: "A stunning display for creative professionals.",
                    price: 100,
                    discount_price: 90,
                    star: 5,
                    in_stock: true,
                    sku: "SKU001"
                };
            }
            return {
                thumbnail_url: res.image,
                images: res.images,
                name: res.name,
                description: res.description,
                price: res.price,
                discount_price: res.oldPrice,
                star: res.rating,
                in_stock: res.in_stock,
                sku: res.sku
            };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

interface ProductModalState {
    isOpen: boolean;
    product: {
        thumbnail_url: string;
        images: string[];
        name: string;
        description: string;
        price: number;
        discount_price: number;
        star: number;
        in_stock: boolean;
        sku: string;
    } | null;
}

const initialState: ProductModalState = {
    isOpen: false,
    product: null
};

const productModalReducer = createSlice({
    name: 'productModal',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        closeModal: state => {
            state.isOpen = false;
            state.product = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(showProductModal.fulfilled, (state, action: PayloadAction<ProductModalState['product']>) => {
                state.product = action.payload;
                state.isOpen = true;
            })
            .addCase(showProductModal.rejected, (state, action) => {
                console.error('Failed to fetch product:', action.payload);
            });
    }
});

export const {setProduct, closeModal} = productModalReducer.actions;
export default productModalReducer.reducer;
