import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: [],
    loading: true,
  },
  reducers: {
    PRODUCT_LIST_REQUEST: (products) => {
      products.loading = true;
    },
    PRODUCT_LIST_SUCCESS: (products, action) => {
      products.loading = false;
      products.products = action.payload.products;
    },
    PRODUCT_LIST_FAIL: (products, action) => {
      products.error = action.payload;
      products.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
  productsSlice.actions;

export default productsSlice.reducer;

// Action Creators
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST.type,
    });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS.type, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL.type,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
