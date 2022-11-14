import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm() {
  return (
      <form className="search-form">
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
