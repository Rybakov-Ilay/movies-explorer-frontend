import './MoviesCard.css';
import image from '../../images/movie-pic-1.png'

function MoviesCard(props) {
  const currentPath = window.location.pathname
  const cardButtonDelete = `movei__button movei__button-type_delete`
  const cardButtonSaved = `movei__button movei__button-type_save ${props.isSaved ? "movei__button-type_saved" : ""}`

  return (
    <li className="movie">
      <div className="movie__header">
        <h2 className="movie__title">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 47м</span>

        <button
          type="button"
          className={currentPath === "/movies" ? cardButtonSaved : cardButtonDelete}
        >
        </button>
      </div>
      <img
        className="movie__image"
        src={image}
        alt="Обложка фильма"
      />
    </li>
  );
}

export default MoviesCard;
