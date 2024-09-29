import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from '../store';
import {BASE_URL} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ErrorToast, SuccessToast} from '../../utils/toast';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: '',
  },
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload || '';
    },
    setUsername: (state: any, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
  },
});

const {setToken, setUsername} = userSlice.actions;

export const signUp = (data: any, navigation: () => void) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(BASE_URL + '/signup', data);
      await AsyncStorage.setItem('authToken', response.data?.token);
      await AsyncStorage.setItem('authUsername', response.data?.username);
      dispatch(setToken(response.data?.token));
      dispatch(setUsername(response.data?.username));
      SuccessToast(response?.data?.message);
      navigation();
    } catch (error: any) {
      ErrorToast(error.response?.data?.message);
    }
  };
};
export const login = (data: any, navigation: () => void) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(BASE_URL + '/login', data);
      await AsyncStorage.setItem('authToken', response.data?.token);
      await AsyncStorage.setItem('authUsername', response.data?.username);
      dispatch(setToken(response.data?.token));
      dispatch(setUsername(response.data?.username));
      SuccessToast(response?.data?.message);
      navigation();
    } catch (error: any) {
      ErrorToast(error.response?.data?.message);
    }
  };
};

export const initializeData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const username = await AsyncStorage.getItem('authUsername');
      token ? dispatch(setToken(token)) : dispatch(setToken(''));
      username ? dispatch(setUsername(username)) : dispatch(setUsername(''));
    } catch (error) {
      ErrorToast(JSON.stringify(error));
    }
  };
};

export const logOut = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('authUsername');
      dispatch(setToken(''));
      dispatch(setUsername(''));
    } catch (error) {
      ErrorToast(JSON.stringify(error));
    }
  };
};

export default userSlice.reducer;
