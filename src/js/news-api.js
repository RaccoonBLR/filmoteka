import axios from "axios";
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, MOVIE_DETAILS_URL } from "./api-vars";

class NewTrendApi {
  constructor() {
    this.page = 1;
  }
      async fetchTrend() {
  try {
      const resp = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${this.page}`);
  return resp.data.results;
  } catch (err) {
    console.log(error.message);
  }
  }
  get page() {
    return this.page;
  }

  set page(newPage) {
    this.page = newPage;
  }
}


class NewSearchApi {
  constructor() {
    this.page = 1,
    this.search = 'shrek'
  }
async fetchSearch() {
  try {
    const resp = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${this.search}&page=${this.page}`);
    return resp.data.results;
    } catch (err) {
    console.log(error.message)
  }
  }
    get page() {
    return this.page;
  }
  set page(newPage) {
    this.page = newPage;
  }
    get search() {
    return this.search;
  }
  set search(newSearch) {
    this.search = newSearch;
  }
}

export { NewTrendApi, NewSearchApi };