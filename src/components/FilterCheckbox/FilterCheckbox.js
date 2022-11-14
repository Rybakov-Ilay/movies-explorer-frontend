import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [checkboxState, setCheckboxState] = useState(false)
  const checkboxStatus = checkboxState ? 'on' : 'off'

  const checkboxToggle = () => {
    setCheckboxState(!checkboxState)
  }


  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__wrap">
        <input type="checkbox" className="filter-checkbox__input" value={checkboxStatus} onClick={checkboxToggle}/>
        <div className="filter-checkbox__slider">
          <div className="filter-checkbox__toggler"/>
        </div>
      </label>
      <p className="filter-checkbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
