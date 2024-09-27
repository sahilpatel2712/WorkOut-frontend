import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from '../store';
import {BASE_URL} from '@env';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    username: '',
    token: '',
  },
  reducers: {
    setEmail: (state: any, action: PayloadAction) => {
      state.email = action.payload;
    },
    setToken: (state: any, action: PayloadAction) => {
      state.token = action.payload;
    },
    setUsername: (state: any, action: PayloadAction) => {
      state.username = action.payload;
    },
  },
});

const {setEmail, setToken, setUsername} = userSlice.actions;

export const login = (data: any) => {
  return async (dispatch: AppDispatch) => {
    console.log(BASE_URL + '/login', data);
    try {
      const response = await axios.post(BASE_URL + '/login', data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};

export const logOut = () => {
  return async (dispatch: AppDispatch) => {};
};

export default userSlice.reducer;
