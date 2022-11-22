import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
                       handleSubmitSearchFoundMovies,
                       handleSubmitSearchMovies,
                       visible,
                       searchMovies,
                       showMore,
                       foundSavedMovies,
                       handleCardDelete
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
      />
    </section>
  );
}

export default SavedMovies;
