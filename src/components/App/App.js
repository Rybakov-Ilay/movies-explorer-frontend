import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";

import './App.css';

import Main from "../Main/Main";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login"
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";

import getFilteredMovies from "../../utils/getFilteredMovies";
import useGetWindowWidth from "../../utils/useGetWindowWidth";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteAuthorized from "../ProtectedRouteAuthorized/ProtectedRouteAuthorized";


function App() {

  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [renderLoading, setRenderLoading] = useState(false);
  const [isSingUp, setIsSingUp] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [searchMovies, setSearchMovies] = useState([])
  const [visible, setVisible] = useState(0)
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [firstSearch, setFirstSearch] = useState(false)
  const [firstSearchFound, setFirstSearchFound] = useState(false)
  const [updateProfile, setUpdateProfile] = useState(false)
  const windowWidth = useGetWindowWidth();
  const navigate = useNavigate();

  function getAmountOfFilms() {
    if (windowWidth <= 480) {
      setVisible(5)
    } else if (windowWidth <= 1280) {
      setVisible(8)
    } else {
      setVisible(12)
    }
  }

  function showMore() {
    let increaseBy;
    windowWidth < 1100 ? increaseBy = 2 : increaseBy = 3
    setVisible(prevValue => prevValue + increaseBy)
  }

  useEffect(() => {
    getAmountOfFilms()
  }, [])


  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      MainApi
        .checkToken(token)
        .then((res) => {
          setCurrentUser(res)
          setLoggedIn(true);
        })
        .catch(err => {
          handleSignOut();
          console.log(err);
        })
    }
  }, [])

  useEffect(() => {
    if (localStorage.movies) {
      const movie = JSON.parse(localStorage.movies)
      setSearchMovies(movie)
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    MainApi
      .getSavedMovies(token)
      .then((res) => {
        setFoundSavedMovies(res)
      })
      .catch((err) => console.log(err))
  }, [loggedIn])


  function handleSubmitSearchMovies(form) {
    setSearchMovies([]);
    setRenderLoading(true);
    MoviesApi
      .getMovies()
      .then(data => {
        const updateSearchMovies = getFilteredMovies(form, data)
        if (updateSearchMovies.length > 0) {
          updateSearchMovies.forEach(savedMovie => {
            const id = savedMovie.id ? savedMovie.id : savedMovie.movieId
            foundSavedMovies.forEach(foundMovie => {
              if (id === foundMovie.movieId) {
                savedMovie.isSaved = true;
                savedMovie._id = foundMovie._id
              }
            })
          })
        }
        setSearchMovies(updateSearchMovies);
        const movie = JSON.stringify(updateSearchMovies)
        localStorage.setItem('movies', movie)
        localStorage.setItem('movieSearchQuery', form.movie)
        localStorage.setItem('filterCheckbox', form.filterDuration)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
        setFirstSearch(true);
      })
  }

  function handleSubmitSearchFoundMovies(searchParameter) {
    setRenderLoading(true);
    const token = localStorage.getItem('token')
    MainApi
      .getSavedMovies(token)
      .then(data => {
        setFoundSavedMovies(getFilteredMovies(searchParameter, data))
        localStorage.setItem('moviesFound', JSON.stringify(foundSavedMovies))
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
        setFirstSearchFound(true)
      })
  }

  function handleCardSaved(movie) {
    const movieCard = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image.url
        ? `https://api.nomoreparties.co/${movie.image.url}`
        : movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
      movieId: movie.id || movie.movieId,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    const token = localStorage.getItem('token')
    MainApi
      .saveMovie(movieCard, token)
      .then((savedMovie) => {
        const updateSearchMovies = searchMovies.map((c) => {
          const id = c.id ? c.id : c.movieId
          if (id === movieCard.movieId) {
            savedMovie.isSaved = true;
            return savedMovie;
          } else {
            return c
          }
        })


        setSearchMovies(updateSearchMovies)
        localStorage.setItem('movies', JSON.stringify(updateSearchMovies))
        setFoundSavedMovies([savedMovie, ...foundSavedMovies])
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(id) {
    const token = localStorage.getItem('token')
    MainApi
      .deleteMovie(id, token)
      .then((deleteMovie) => {
        const updateSearchMovies = searchMovies.map((c) => {
          const id = c.id ? c.id : c.movieId
          if (id === deleteMovie.movieId) {
            return deleteMovie;
          } else {
            return c
          }
        })
        setSearchMovies(updateSearchMovies)
        localStorage.setItem('movies', JSON.stringify(updateSearchMovies))
        setFoundSavedMovies(foundSavedMovies.filter(c => c.movieId !== deleteMovie.movieId))
      })
      .catch((err) => console.log(err));
  }


  function handelSubmitSingUp({ name, email, password }) {
    setRenderLoading(true);
    MainApi
      .register(name, email, password)
      .then(() => {
        setIsSingUp(true);
        handelSubmitLogin({ email, password })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setRenderLoading(false));
  }

  function handelSubmitLogin({ email, password }) {
    setRenderLoading(true);
    MainApi
      .login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          localStorage.setItem('loggedIn', 'true')
          MainApi.getUser(res.token)
            .then((dataUser) => {
              setCurrentUser({ email: dataUser.email, name: dataUser.name });
            })
            .catch((error) => {
              console.log(error);
            });
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setRenderLoading(false));
  }

  function handelChangeProfile({ name, email }) {
    setUpdateProfile(false)
    setRenderLoading(true);
    const token = localStorage.getItem('token')
    MainApi
      .editUser(name, email, token)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
        setUpdateProfile(true)
      });
  }

  function handleSignOut() {
    setCurrentUser({ name: '', email: '' });
    setSearchMovies([]);
    setFoundSavedMovies([]);
    setLoggedIn(false);
    setFirstSearch(false);
    localStorage.clear();
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app__page">
          <Routes>
            <Route
              exact path="/"
              element={[<Header loggedIn={loggedIn}/>, <Main/>, <Footer/>]}
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Header loggedIn={loggedIn}/>
                  <Preloader renderLoading={renderLoading}/>
                  <Movies
                    handleSubmitSearchMovies={handleSubmitSearchMovies}
                    searchMovies={searchMovies}
                    visible={visible}
                    showMore={showMore}
                    handleCardSaved={handleCardSaved}
                    handleCardDelete={handleCardDelete}
                    firstSearch={firstSearch}
                    renderLoading={renderLoading}
                    foundSavedMovies={foundSavedMovies}
                  />
                  <Footer/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Header loggedIn={loggedIn}/>
                  <SavedMovies
                    handleSubmitSearchFoundMovies={handleSubmitSearchFoundMovies}
                    handleSubmitSearchMovies={handleSubmitSearchMovies}
                    searchMovies={searchMovies}
                    visible={visible}
                    showMore={showMore}
                    foundSavedMovies={foundSavedMovies}
                    handleCardDelete={handleCardDelete}
                    firstSearchFound={firstSearchFound}
                    renderLoading={renderLoading}
                  />
                  <Footer/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Header loggedIn={loggedIn}/>
                  <Profile
                    handleSignOut={handleSignOut}
                    handelChangeProfile={handelChangeProfile}
                    loggedIn={loggedIn}
                    updateProfile={updateProfile}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRouteAuthorized loggedIn={loggedIn}>
                  <Login
                    onLogin={handelSubmitLogin}
                    loggedIn={loggedIn}
                  />
                </ProtectedRouteAuthorized>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRouteAuthorized loggedIn={loggedIn}>
                  <Register
                    onSingUp={handelSubmitSingUp}
                    isSingUp={isSingUp}
                  />
                </ProtectedRouteAuthorized>
              }
            />
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
