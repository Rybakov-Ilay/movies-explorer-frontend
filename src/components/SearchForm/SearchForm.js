import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';
import usePathName from "../../utils/usePathName";

function SearchForm({ handleSubmitSearchMovies, handleSubmitSearchFoundMovies }) {
  const currentPath = usePathName()

  function handleSubmit(evt) {
    evt.preventDefault();
    const movieValue = evt.target.querySelector('.search-form__input').value || "";
    const filterDurationValue = evt.target.querySelector('.filter-checkbox__input').value;
    if (currentPath === '/movies') {
      handleSubmitSearchMovies({ movie: movieValue, filterDuration: filterDurationValue })
    } else {
      handleSubmitSearchFoundMovies({ movie: movieValue, filterDuration: filterDurationValue })
    }

  }


  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__wrap">
        <input
          className="search-form__input"
          name="movie"
          id="movie"
          type="text"
          placeholder="Фильм"
          required
        />
        <button
          className="search-form__submit"
          type="submit"
        >
          Поиск
        </button>
      </div>
      <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;
