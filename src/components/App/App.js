import './App.css';
import Main from "../Main/Main";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login"
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import getFilteredMovies from "../../utils/getFilteredMovies";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useGetWindowWidth from "../../utils/useGetWindowWidth";
import MainApi from "../../utils/MainApi";
import Error from "../Error/Error";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteAuthorized from "../ProtectedRouteAuthorized/ProtectedRouteAuthorized";


function App() {

  const [currentUser, setCurrentUser] = useState({ name: 'sff', email: 'eyw' });
  const [renderLoading, setRenderLoading] = useState(false);
  const [isSingUp, setIsSingUp] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [searchMovies, setSearchMovies] = useState([])
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0)
  const windowWidth = useGetWindowWidth();
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [erorr, setErorr] = useState('');


  function getAmountOfFilms() {
    if (windowWidth <= 480) {
      setVisible(5)
    } else if (windowWidth <= 1280) {
      setVisible(8)
    } else {
      setVisible(12)
    }
  }

  useEffect(() => {
    getAmountOfFilms()
  }, [])


  function showMore() {
    let increaseBy;
    windowWidth < 1100 ? increaseBy = 2 : increaseBy = 3
    setVisible(prevValue => prevValue + increaseBy)
  }


  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      mainApi
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [])


  function handleSubmitSearchMovies(searchParameter) {
    setSearchMovies([]);
    setRenderLoading(true);
    MoviesApi
      .getMovies()
      .then(data => {
        setSearchMovies(getFilteredMovies(searchParameter, data));
        localStorage.setItem('movies', JSON.stringify(setSearchMovies))
        localStorage.setItem('movieSearch', searchParameter.movie)
        localStorage.setItem('filterCheckbox', searchParameter.filterDuration)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
      })
  }

  function handleSubmitSearchFoundMovies(searchParameter) {
    setRenderLoading(true);
    const token = localStorage.getItem('token')
    MainApi
      .getSavedMovies(token)
      .then(data => {
        setFoundSavedMovies(getFilteredMovies(searchParameter, data))
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
      })
  }

  function handleCardSaved(data) {
    const movieCard = {
      country: data.movie.country,
      director: data.movie.director,
      duration: data.movie.duration,
      year: data.movie.year,
      description: data.movie.description,
      image: data.movie.image.url ? `https://api.nomoreparties.co/${data.movie.image.url}` : data.movie.image,
      trailerLink: data.movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${data.movie.image.url}`,
      movieId: data.movie.id || data.movie.movieId,
      nameRU: data.movie.nameRU,
      nameEN: data.movie.nameEN,
    }
    const token = localStorage.getItem('token')
    mainApi
      .saveMovie(movieCard, token)
      .then((savedMovie) => {
        setSearchMovies((state) => state.map((c) => {
          const id = c.id ? c.id : c.movieId
          if (id === movieCard.movieId) {
            savedMovie.isSaved = true;
            return savedMovie;
          } else {
            return c
          }
        }))
        setFoundSavedMovies([savedMovie, ...foundSavedMovies])
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(id) {
    const token = localStorage.getItem('token')
    mainApi
      .deleteMovie(id, token)
      .then((deleteMovie) => {
        setSearchMovies(searchMovies.map((c) => {
          const id = c.id ? c.id : c.movieId
          if (id === deleteMovie.movieId) {
            return deleteMovie;
          } else {
            return c
          }
        }))
        setFoundSavedMovies(foundSavedMovies.filter(c => c.movieId !== deleteMovie.movieId))
      })
      .catch((err) => console.log(err));
  }


  function handelSubmitSingUp({ name, email, password }) {
    setRenderLoading(true);
    mainApi
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
    mainApi
      .login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          localStorage.setItem('loggedIn', 'true')
          Promise.all([mainApi.getUser(res.token)])
            .then(([dataUser]) => {
              setCurrentUser({ ...dataUser });
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
    setRenderLoading(true);
    const token = localStorage.getItem('token')
    mainApi
      .editUser(name, email, token)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setRenderLoading(false));
  }

  function handleSignOut() {
    setCurrentUser('');
    setSearchMovies([]);
    setFoundSavedMovies([]);
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('movies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('filterCheckbox');
    localStorage.removeItem('foundSavedMovies');
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
                  />
                  <Footer/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Header loggedIn={loggedIn}/>,
                  <Profile
                    handleSignOut={handleSignOut}
                    handelChangeProfile={handelChangeProfile}
                    loggedIn={loggedIn}
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
