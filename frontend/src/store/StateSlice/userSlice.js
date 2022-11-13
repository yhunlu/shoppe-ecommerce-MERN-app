import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const userSlice = createSlice({
  name: 'user',
  initialState: { userInfo: userFromStorage },
  reducers: {
    USER_SIGNIN_REQUEST: (user) => {
      user.loading = true;
    },
    USER_SIGNIN_SUCCESS: (user, action) => {
      user.loading = false;
      user.userInfo = action.payload;
    },
    USER_SIGNIN_FAIL: (user, action) => {
      user.error = action.payload;
      user.loading = false;
    },
    USER_SIGNOUT: (user, action) => {
      return { userInfo: {}}
    }
  },
});

// Action creators are generated for each case reducer function
export const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT } =
  userSlice.actions;

export default userSlice.reducer;

// Action Creators
export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST.type,
      payload: { email, password },
    });

    const { data } = await axios.post('/api/users/signin', {
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

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT.type });
  document.location.href = '/signin';
};