import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const initialState = {
//   localStore: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")) : [],
//   favourites: [],
// }

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
      const copyStatePhotos = [...state];
      console.log('id', action.payload);
      console.log("copy", copyStatePhotos);
      const editIndex = copyStatePhotos.findIndex(
        (photo) => photo.id === action.payload.id
      );
      console.log('editindex', editIndex);
      const newPhoto = {
              ...copyStatePhotos[editIndex],
              description: action.payload.change,
      };
      console.log('newphoto',newPhoto )
      copyStatePhotos[editIndex] = newPhoto;
      state = copyStatePhotos;
      console.log('nuevo estado', state);
      localStorage.setItem("collection", JSON.stringify(state));
      return state;
    },
  },
});

export default favouriteSlice.reducer;
export const { addFavourite, deleteFavourite, editDescription } =
  favouriteSlice.actions;
// export const favouritesPhotos = (state) => state.favourites.photos;
