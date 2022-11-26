import './MoviesCard.css';

import usePathName from "../../utils/usePathName";
import getDuration from "../../utils/getDuration";

function MoviesCard({ movie, onCardSaved, onCardDelete }) {
  const cardButtonDelete = `movei__button movei__button-type_delete`
  const cardButtonSaved = `movei__button movei__button-type_save ${movie.isSaved ? "movei__button-type_saved" : ""}`
  const currentPath = usePathName();

  function handleSavedClick() {
    onCardSaved(movie);
  }

  function handleDeleteClick() {
    onCardDelete(movie._id)
  }

  return (
    <li className="movie">
      <div className="movie__header">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <span className="movie__duration">{getDuration(movie)}</span>

        <button
          type="button"
          onClick={currentPath === "/movies"
            ? (movie.isSaved ? handleDeleteClick : handleSavedClick)
            : handleDeleteClick}
          className={currentPath === "/movies"
            ? cardButtonSaved
            : cardButtonDelete}
        >
        </button>
      </div>
      <a href={movie.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="movie__image"
          src={movie.image.url
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image}
          alt="Обложка фильма"
        />
      </a>
    </li>
  );
}

export default MoviesCard;
