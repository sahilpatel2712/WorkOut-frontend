import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import loaderReducer from './loader/loaderSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      loader: loaderReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
