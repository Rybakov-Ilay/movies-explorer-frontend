import './App.css';
import Main from "../Main/Main";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login"
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";


function App() {
  function getFilteredMovies(searchParameter, movies) {

  }

  const [renderLoading, setRenderLoading] = useState(false);


  function handleSubmitSearchMovies(searchParameter) {
    console.log(searchParameter)
    setRenderLoading(true);
    MoviesApi
      .getMovies()
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setRenderLoading(false)
      })
  }


  return (
    <div className="app">
      <div className="app__page">
        <Routes>
          <Route exact path="/" element={[<Header/>, <Main/>, <Footer/>]}/>
          <Route
            path="/movies"
            element={
              [
                <Header/>,
                <Preloader renderLoading={renderLoading}/>,
                <Movies handleSubmitSearchMovies={handleSubmitSearchMovies}/>,
                <Footer/>
              ]
            }/>
          <Route path="/saved-movies" element={[<Header/>, <SavedMovies/>, <Footer/>]}/>
          <Route path="/profile" element={[<Header/>, <Profile/>]}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
