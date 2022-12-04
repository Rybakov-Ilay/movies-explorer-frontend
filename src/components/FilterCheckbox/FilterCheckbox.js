import React, { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [checkboxFilter, setCheckboxFilter] = useState(false)

  useEffect(() => {
    if (localStorage.checkboxFilter) {
      localStorage.checkboxFilter === 'true'
        ? setCheckboxFilter(true)
        : setCheckboxFilter(false)
    }
  }, [])

  const checkboxToggle = () => {
    setCheckboxFilter(!checkboxFilter)
    localStorage.setItem('checkboxFilter', (!checkboxFilter).toString())
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__wrap">
        <input type="checkbox"
               name="checkbox"
               className="filter-checkbox__input"
               checked={checkboxFilter}
               onClick={checkboxToggle}
        />
        <div className="filter-checkbox__slider">
          <div className="filter-checkbox__toggler"/>
        </div>
      </label>
      <p className="filter-checkbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
