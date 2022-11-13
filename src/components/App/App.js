import './App.css';
import Main from "../Main/Main";
import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login"
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";


function App() {

  return (
    <div className="app">
      <div className="app__page">
        <Routes>
          <Route exact path="/" element={[<Header/>, <Main/>, <Footer/>]}/>
          <Route path="/movies" element={[<Header/>, <Movies/>, <Footer/>]}/>
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
