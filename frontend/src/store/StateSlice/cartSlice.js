import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartItemFromStorage = localStorage.getItem('cartItem')
  ? JSON.parse(localStorage.getItem('cartItem'))
  : { Items: [] };

const cartSlice = createSlice({
  name: 'cartItem',
  initialState: cartItemFromStorage,
  reducers: {
    CART_ADD_ITEM: (cartItem, action) => {
      const item = action.payload;
      const existItem = cartItem.Items.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...cartItem,
          Items: cartItem.Items.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...cartItem,
          Items: [...cartItem.Items, item],
        };
      }

    },
    CART_REMOVE_ITEM: (cartItem, action) => {
      return {
        ...cartItem,
        Items: cartItem.Items.filter((x) => x.product !== action.payload),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { CART_ADD_ITEM, CART_REMOVE_ITEM } = cartSlice.actions;

export default cartSlice.reducer;

// Action Creators
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM.type,
    payload: {
      product: data._id,
      name: data.name,
      images: data.images,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItem', JSON.stringify(getState().cartItem));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM.type,
    payload: id,
  });
  localStorage.setItem('cartItem', JSON.stringify(getState().cartItem));
};
