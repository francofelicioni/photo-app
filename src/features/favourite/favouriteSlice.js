import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("collection")
  ? JSON.parse(localStorage.getItem("collection"))
  : [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("collection", JSON.stringify(state));
    },
    deleteFavourite: (state, action) => {
      console.log("payload", action.payload);
      const newState = state.filter((item) => action.payload != item.id);
      localStorage.setItem("collection", JSON.stringify(newState));
      return newState;
    },
    editDescription: (state, action) => {

      // console.log(state)
      console.log('state', action.payload)
      console.log('payload', action.payload)
      const copyStatePhotos = [...state];
      const editIndex = copyStatePhotos.findIndex(
        (photo) => photo.id === action.payload.id
      );
      const newPhoto = {
              ...copyStatePhotos[editIndex],
              description: action.payload.desc,
      };
      {console.log('CS', copyStatePhotos)}
      copyStatePhotos[editIndex] = newPhoto;
      state = copyStatePhotos;
      localStorage.setItem("collection", JSON.stringify(state));
      return state;
    },
  },
});

export default favouriteSlice.reducer;
export const { addFavourite, deleteFavourite, editDescription } =
  favouriteSlice.actions;
