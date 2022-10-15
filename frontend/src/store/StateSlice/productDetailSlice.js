import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    product: {},
    loading: true,
  },
  reducers: {
    PRODUCT_DETAILS_REQUEST: (productDetail) => {
      productDetail.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (productDetail, action) => {
      productDetail.loading = false;
      productDetail.product = action.payload;
    },
    PRODUCT_DETAILS_FAIL: (productDetail, action) => {
      productDetail.error = action.payload;
      productDetail.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;

// Action Creators
export const detailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST.type,
      payload: id,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS.type, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL.type,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
