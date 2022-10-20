import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favourite/favouriteSlice';

export const store = configureStore({
  reducer: {
    favourite: favoriteReducer,
  },
});
