import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './StateSlice/productsSlice';

const store = configureStore({
  reducer: { products: productsReducer },
});

export default store;
