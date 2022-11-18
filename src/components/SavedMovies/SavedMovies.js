import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({handleSubmitSearchMovies}) {
  return (
    <section className="saved-movies">
      <SearchForm handleSubmitSearchMovies={handleSubmitSearchMovies}/>
      <MoviesCardList/>
    </section>
  );
}

export default SavedMovies;
