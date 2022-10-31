import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const userSlice = createSlice({
  name: 'user',
  initialState: userInfoFromStorage,
  reducers: {
    USER_SIGNIN_REQUEST: (user) => {
      user.loading = true;
    },
    USER_SIGNIN_SUCCESS: (user, action) => {
      user.loading = false;
      user.products = action.payload.userInfo;
    },
    USER_SIGNIN_FAIL: (user, action) => {
      user.error = action.payload.error;
      user.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } =
  userSlice.actions;

export default userSlice.reducer;

// Action Creators
export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST.type,
      payload: { email, password },
    });

    const { data } = await axios.get('/api/users/signin', {
      email,
      password,
    });

    dispatch({ type: USER_SIGNIN_SUCCESS.type, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL.type,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
