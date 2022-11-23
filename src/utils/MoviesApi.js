import { MOVIES_OPTIONS } from "./constant";

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, { headers: this._headers }).then(
      (res) => {
        return this._getResponseData(res);
      }
    );
  }
}

const moviesApi = new MoviesApi(MOVIES_OPTIONS);
export default moviesApi;

