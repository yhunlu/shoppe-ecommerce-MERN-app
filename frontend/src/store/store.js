import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './StateSlice/productsSlice';
import productDetailReducer from './StateSlice/productDetailSlice';
import cartSliceReducer from './StateSlice/cartSlice';
import userSliceReducer from './StateSlice/userSlice';

const store = configureStore({
  // name of slice
  reducer: {
    productsList: productsReducer,
    productDetail: productDetailReducer,
    cartItem: cartSliceReducer,
    users: userSliceReducer,
  },
});

export default store;
