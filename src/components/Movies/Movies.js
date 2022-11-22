import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Error from "../Error/Error";

function Movies(
  {
    handleSubmitSearchMovies,
    searchMovies,
    visible,
    showMore,
    handleCardSaved,
    handleCardDelete,
  }
) {
  console.log(searchMovies.length)
  return (
    <section className="movies">
      <SearchForm handleSubmitSearchMovies={handleSubmitSearchMovies}/>
      <MoviesCardList
        visible={visible}
        showMore={showMore}
        searchMovies={searchMovies}
        handleCardSaved={handleCardSaved}
        handleCardDelete={handleCardDelete}
      />
    </section>
  );
}

export default Movies;
