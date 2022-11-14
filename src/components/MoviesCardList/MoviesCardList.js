import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import React, { useState } from 'react';

function MoviesCardList() {
  const [isSaved, setIsSaved] = useState(true)

  return (
    <section className="movies">
      <ul className="movies__list">
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard isSaved={isSaved}/>
      </ul>
      <ButtonShowMore/>
    </section>
  );
}

export default MoviesCardList;
