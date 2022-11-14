import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ handleSubmitSearchMovies }) {
  return (
    <section className="movies">
      <SearchForm handleSubmitSearchMovies={handleSubmitSearchMovies}/>
      <MoviesCardList/>
    </section>
  );
}

export default Movies;
