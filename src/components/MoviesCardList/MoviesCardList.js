import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import React, { useState } from 'react';
import usePathName from "../../utils/usePathName";

function MoviesCardList({ searchMovies, visible, showMore, handleCardSaved, foundSavedMovies, handleCardDelete }) {
  const currentPath = usePathName();
  return (
    <section className="movies">
      {currentPath === "/movies"
        ?
        (<>
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
