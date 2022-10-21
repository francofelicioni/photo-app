import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

 export const favouriteSlice = createSlice({
    name:'favourites',
    initialState,
    reducers: { 
        addFavourite: (state, action) => {
            state.push(action.payload)
        },
        deleteFavourite: (state, action) => {
            console.log('payload', action.payload)
            return state.filter (item => action.payload != item.id)
            console.log (state);
        },
        changeDescription: (state, action) => {
         //MANDAR EL ID, PARA QUE IDENTIFIQUE LA IMAGEN y A ESA CAMBIARLE LA PROP DESCRIPTION CON LO QUE ESTOY CAPTURANDO DEL INPUT
        }
    }
})

export default favouriteSlice.reducer;
export const {addFavourite, deleteFavourite} = favouriteSlice.actions;