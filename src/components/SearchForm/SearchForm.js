import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';
import usePathName from "../../utils/usePathName";
import { useEffect, useState } from "react";

function SearchForm({ handleSubmitSearchMovies, handleSubmitSearchFoundMovies}) {

  const currentPath = usePathName()
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setValues({ movie: localStorage.movieSearchQuery });
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    const filterDurationValue = localStorage.checkboxFilter === 'true' ? 'on' : 'off'
    currentPath === '/movies'
      ? handleSubmitSearchMovies({ movie: values.movie, filterDuration: filterDurationValue })
      : handleSubmitSearchFoundMovies({ movie: values.movie, filterDuration: filterDurationValue })

  }

  return (
    <form className="search-form" id="search-form" name="search-form" onSubmit={handleSubmit}>
      <div className="search-form__wrap">
        <input
          className="search-form__input"
          name="movie"
          id="movie"
          type="text"
          placeholder="Фильм"
          required
          value={values.movie || ""}
          onChange={handleChange}
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
