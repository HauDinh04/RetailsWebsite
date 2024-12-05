import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './features/todos/demoSlice';
import accountReducer from './features/account/account.slice';
import skinReducer from './features/skin/skin.slice';
import noticeReducer from './features/notice/notice.slice';
import productModalReducer from './features/product/product_modal.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      demo: demoReducer,
      account: accountReducer,
      skin: skinReducer,
      notice: noticeReducer,
      productModal: productModalReducer
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
