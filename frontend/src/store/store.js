import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './StateSlice/productsSlice';
import productDetailReducer from './StateSlice/productDetailSlice';
import cartSliceReducer from './StateSlice/cartSlice';
  
const store = configureStore({
  // name of slice
  reducer: { productsList: productsReducer, productDetail: productDetailReducer, cartItem: cartSliceReducer },
});

export default store;
