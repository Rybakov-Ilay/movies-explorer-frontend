const moviesOptions = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

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

const moviesApi = new MoviesApi(moviesOptions);
export default moviesApi;

