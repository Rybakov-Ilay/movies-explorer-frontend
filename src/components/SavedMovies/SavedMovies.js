import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(
  {
    handleSubmitSearchFoundMovies,
    handleSubmitSearchMovies,
    visible,
    searchMovies,
    showMore,
    foundSavedMovies,
    handleCardDelete,
    firstSearchFound,
    renderLoading
  }) {
  return (
    <section className="saved-movies">
      <SearchForm handleSubmitSearchMovies={handleSubmitSearchMovies}
                  handleSubmitSearchFoundMovies={handleSubmitSearchFoundMovies}/>
      <MoviesCardList
        visible={visible}
        showMore={showMore}
        searchMovies={searchMovies}
        foundSavedMovies={foundSavedMovies}
        handleCardDelete={handleCardDelete}
        firstSearchFound={firstSearchFound}
        renderLoading={renderLoading}
      />
    </section>
  );
}

export default SavedMovies;
