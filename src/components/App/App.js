import './App.css';
import Main from "../Main/Main";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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


function App() {

  const [currentUser, setCurrentUser] = useState({});
  // состояние лоадера
  const [renderLoading, setRenderLoading] = useState(false);
  // состояние регистрации
  const [isSingUp, setIsSingUp] = useState(false)
  // состояние авторизации
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate();


  function handleSubmitSearchMovies(searchParameter) {
    setRenderLoading(true);
    MoviesApi
      .getMovies()
      .then(data => {
        console.log(getFilteredMovies(searchParameter, data))
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
      })
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
    // localStorage.setItem("email", email);
    setRenderLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        console.log();
        if (res) {
          Promise.all([mainApi.getUser()])
            .then(([dataProfile]) => {
              setCurrentUser(dataProfile);
            })
            .catch((error) => {
              console.log(error);
            });
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          navigate("/movies")
        }
      })
      .catch((err) => {
        // setIsInfoTooltipPopupOpen(true);
        console.log(err);
      })
      .finally(() => setRenderLoading(false));
  }

  // useEffect(() => {
  //   mainApi
  //     .getUser()
  //     .then((data) => {
  //       setCurrentUser({
  //         data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);




  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app__page">
          <Routes>
            <Route exact path="/" element={
              [
                <Header loggedIn={loggedIn}/>,
                <Main/>,
                <Footer/>
              ]
            }/>
            <Route
              path="/movies"
              element={
                [
                  <Header loggedIn={loggedIn}/>,
                  <Preloader renderLoading={renderLoading}/>,
                  <Movies handleSubmitSearchMovies={handleSubmitSearchMovies}/>,
                  <Footer/>
                ]
              }/>
            <Route path="/saved-movies" element={
              [
                <Header loggedIn={loggedIn}/>,
                <SavedMovies handleSubmitSearchMovies={handleSubmitSearchMovies}/>,
                <Footer/>
              ]
            }/>
            <Route path="/profile" element={[<Header loggedIn={loggedIn}/>, <Profile/>]}/>
            <Route path="/signin" element={
              <Login
                onLogin={handelSubmitLogin}
                loggedIn={loggedIn}
              />
            }/>
            <Route path="/signup" element={
              <Register
                onSingUp={handelSubmitSingUp}
                isSingUp={isSingUp}
              />
            }/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
