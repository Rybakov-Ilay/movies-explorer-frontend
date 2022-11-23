import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(
  {
    handleSubmitSearchMovies,
    searchMovies,
    visible,
    showMore,
    handleCardSaved,
    handleCardDelete,
    firstSearch,
    renderLoading,
    foundSavedMovies
  }
) {
  return (
    <section className="movies">
      <SearchForm handleSubmitSearchMovies={handleSubmitSearchMovies}/>
      <MoviesCardList
        visible={visible}
        showMore={showMore}
        searchMovies={searchMovies}
        handleCardSaved={handleCardSaved}
        handleCardDelete={handleCardDelete}
        firstSearch={firstSearch}
        renderLoading={renderLoading}
        foundSavedMovies={foundSavedMovies}
      />
    </section>
  );
}

export default Movies;
