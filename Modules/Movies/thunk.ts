import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFilmDetailFromApi,getFilmsFromApiWithSearchedText,getImageFromApi,GetFilmWithSearchedTextParams} from "./api"

export const getFilmsFromApiWithSearchedTextThunk = createAsyncThunk(
    "movies/getFilmsFromApiWithSearchedText",
    async (params:GetFilmWithSearchedTextParams) =>{
        const response = await getFilmsFromApiWithSearchedText(params);
        return await response;
    }
);
