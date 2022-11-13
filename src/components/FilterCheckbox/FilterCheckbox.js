import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__wrap">
        <input type="checkbox" className="filter-checkbox__input"/>
        <div className="filter-checkbox__slider">
          <div className="filter-checkbox__toggler"/>
        </div>
      </label>
      <p className="filter-checkbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
