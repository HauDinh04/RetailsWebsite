import { fetchProductDetail } from '@/lib/ProductsDetail.action';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const showProductModal = createAsyncThunk<any, any>(
  'productModal/showProductModal',
  async (productId: number, { rejectWithValue }) => {
    try {
      const res = await fetchProductDetail(productId);

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

const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    setProduct: (state, action: any) => {
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

export const { setProduct, closeModal } = productModalSlice.actions;
export default productModalSlice.reducer;
