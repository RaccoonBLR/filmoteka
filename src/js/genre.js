import axios from "axios";
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, MOVIE_DETAILS_URL } from '../js/api-vars';

export default async function addGanre() {
    try {
        const responses = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        const objGenres = responses.data.genres;
        localStorage.setItem('Ganre', JSON.stringify(objGenres));
} catch(err) {
  console.log(err);
}
}