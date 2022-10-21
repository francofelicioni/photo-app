import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favourite/favouriteSlice';
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favourite: favoriteReducer,
  },
});
