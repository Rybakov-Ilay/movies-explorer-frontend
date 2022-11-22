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
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(res => this._getResponseData(res))
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email })
    })
      .then(res => this._getResponseData(res))
  }

  checkToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => this._getResponseData(res))
  }

  getUser(token) {
    return fetch(`${this.baseUrl}/users/me`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        }
      }
    )
      .then(res => this._getResponseData(res))
  }

  editUser(name, email, token) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(res => this._getResponseData(res))
  }

  saveMovie(data, token) {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
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

  getSavedMovies(token) {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => this._getResponseData(res))
  }

  deleteMovie(idMovie, token) {
    return fetch(`${this.baseUrl}/movies/${idMovie}`, {
      credentials: "include",
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => this._getResponseData(res))
  }
}

const mainApi = new MainApi(mainOptions);
export default mainApi
