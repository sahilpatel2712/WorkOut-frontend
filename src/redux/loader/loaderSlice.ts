import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from '../store';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoader: false,
  },
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoader = action.payload;
    },
  },
});

const {setLoader} = loaderSlice.actions;

export const loaderState = (value: boolean) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoader(value));
  };
};

export default loaderSlice.reducer;
