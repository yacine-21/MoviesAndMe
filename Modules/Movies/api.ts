import config from "../../config";

export type GetFilmWithSearchedTextParams = {
    text:string,
    page:number
}

export async function getFilmsFromApiWithSearchedText(params: GetFilmWithSearchedTextParams) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.API_TOKEN}&language=fr&query=${params.text}&page=${params.page}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export function getImageFromApi(name:string) {
  return `https://image.tmdb.org/t/p/w300${name}`;
}

export async function getFilmDetailFromApi(id:number) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_TOKEN}&language=fr`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {

  }
}
