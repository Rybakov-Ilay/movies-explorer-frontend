const mainOptions = {
  baseUrl: "https://api.movies.ilya.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
};

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }


  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, email, password })
    })
      .then(res => this._getResponseData(res))
  }

  // авторизация пользователя
  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ password, email })
    })
      .then(res => this._getResponseData(res))
  }

  // запрос на роут аутентификации
  checkToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this.headers,
    })
      .then(res => this._getResponseData(res))
  }

  // метод получения информации о пользователе
  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
        credentials: 'include',
        method: 'GET',
        headers: this.headers,
      }
    )
      .then(res => this._getResponseData(res))
  }

  // метод для редактирования информации о пользователе
  editUser(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(res => this._getResponseData(res))
  }

  // метод сохранения карточки на сервере
  saveMovie(data) {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
      .then(res => {
        return res;
      })
      .then(res => this._getResponseData(res))
  }

  // метод получения массива сохраненных фильмов
  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
    })
      .then(res => this._getResponseData(res))
  }

  // метод удаления фильма из сохраненных
  deleteMovie(idMovie) {
    return fetch(`${this.baseUrl}/movies/${idMovie}`, {
      credentials: "include",
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => this._getResponseData(res))
  }
}

// создание экземпляра класса MainApi
const mainApi = new MainApi(mainOptions);
export default mainApi
