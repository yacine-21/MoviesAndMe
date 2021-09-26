import {configureStore} from "@reduxjs/toolkit";
import MoviesReducer from "../Modules/Movies";

export const store = configureStore({
    reducer:{
        Movies: MoviesReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>