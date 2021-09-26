import { createSlice } from '@reduxjs/toolkit'
import {getFilmsFromApiWithSearchedTextThunk} from "./thunk"

const initialState = {
    Movies: {collections:[],error:null,status:"idle",loading:false}
};

const index = createSlice({
    name: "Movies",
    initialState,
    reducers: {},
    extraReducers: builder =>{
        // Fetch Movies 
        builder.addCase(getFilmsFromApiWithSearchedTextThunk.fulfilled,(state,action) =>{
            state.Movies.collections = action.payload;
            state.Movies.status = "succeeded";
            state.Movies.loading = true;
        })

        builder.addCase(getFilmsFromApiWithSearchedTextThunk.pending,(state,action) =>{
            state.Movies.status = "pending";
            state.Movies.loading = true;
        })

        builder.addCase(getFilmsFromApiWithSearchedTextThunk.rejected,(state,action) =>{
            state.Movies.status = "error";
            state.Movies.loading = false;
        })
        
    }
});

export const {

} = index.actions
export default index.reducer