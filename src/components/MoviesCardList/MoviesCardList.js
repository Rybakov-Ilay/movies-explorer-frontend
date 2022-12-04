import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import React from 'react';
import usePathName from "../../utils/usePathName";
import Error from "../Error/Error";

function MoviesCardList(
  {
    searchMovies,
    visible,
    showMore,
    handleCardSaved,
    foundSavedMovies,
    handleCardDelete,
    firstSearch,
    renderLoading,
    firstSearchFound
  }
) {
  const currentPath = usePathName();
  const errorSearchMovies = searchMovies.length === 0 && firstSearch && !renderLoading
    ? 'Ничего не найдено'
    : ""
  const errorSearchMoviesFound = foundSavedMovies.length === 0 && firstSearchFound && !renderLoading
    ? 'Ничего не найдено'
    : ""
  return (
    <section className="movies">
      {currentPath === "/movies"
        ?
        (<>
            <Error error={errorSearchMovies} isValid={false}/>
            <ul className="movies__list">
              {
                searchMovies.slice(0, visible).map(movie => {
                    return (
                      <MoviesCard
                        key={movie.id}
                        movie={movie}
                        onCardSaved={handleCardSaved}
                        onCardDelete={handleCardDelete}
                      />)
                  }
                )
              }

            </ul>
            {
              searchMovies.length === 0 || visible > searchMovies.length - 3
                ? null
                : <ButtonShowMore showMore={showMore}/>
            }
          </>
        )
        : (<>
            <Error error={errorSearchMoviesFound} isValid={false}/>
            <ul className="movies__list">
              {
                foundSavedMovies.slice(0, visible).map(movie => {
                    return (
                      <MoviesCard
                        key={movie.id}
                        movie={movie}
                        onCardDelete={handleCardDelete}
                      />
                    )
                  }
                )
              }

            </ul>
            {
              foundSavedMovies.length === 0 || visible > foundSavedMovies.length - 3
                ? null
                : <ButtonShowMore showMore={showMore}/>
            }
          </>
        )
      }
    </section>
  );
}

export default MoviesCardList;
