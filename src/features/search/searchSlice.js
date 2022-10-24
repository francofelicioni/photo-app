import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  "photos/getPhotos",

  async ({ value }) => {
    const API_KEY = "f3_j5xaaagLteInPGf7sUqRFgJc8ulftP1UGe1ulBi0";
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${value}&per_page=18`;
    const URL_RANDOM = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=18`;

    if (value && value !== "") {
      const response = await fetch(URL);
      const data = await response.json();
      return [...data.results];

    } else {
      const response = await fetch(URL_RANDOM);
      const data = await response.json();
      return [...data];
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending] : (state) => {
        state.isLoading = true;
    },
    [getPhotos.fulfilled] : (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
        state.isLoading = false;
    }
  },
});

export default searchSlice.reducer;
export const selectPhotos = (state) => state.search.photos;
