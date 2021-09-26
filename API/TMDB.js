import { API_TOKEN } from "@env";

export async function getFilmsFromApiWithSearchedText(text, page) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export function getImageFromApi(name) {
  return `https://image.tmdb.org/t/p/w300${name}`;
}

export async function getFilmDetailFromApi(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    console.log("ici");
  }
}
