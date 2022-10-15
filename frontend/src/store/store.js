import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './StateSlice/productsSlice';
import productDetailReducer from './StateSlice/productDetailSlice';

const store = configureStore({
  // name of slice
  reducer: { productsList: productsReducer, productDetail: productDetailReducer },
});

export default store;
