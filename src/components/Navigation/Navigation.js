import React, { useState } from "react";
import './Navigation.css'
import useGetWindowWidth from "../../utils/useGetWindowWidth";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Navigation() {
  const width = useGetWindowWidth();
  const [visible, setVisible] = useState(true);
  const handlerOpenOrCloseMenu = () => {
    setVisible(!visible);
  }
  return (
    <div className='nav'>
      {width < 769 ? (
          <>
            <button className="nav__menu" onClick={handlerOpenOrCloseMenu}/>
            <BurgerMenu visible={visible} onclickCloseMenu={handlerOpenOrCloseMenu}/>
          </>
        ) :
        (
          <div className="nav__desktop">
            <ul className="nav__desktop-links">
              <li>
                <Link to="/movies" className='nav__link nav__link_active'>
                  Фильмы
                </Link>
              </li>
              <li>
                <Link to="/saved-movies" className='nav__link'>
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link to="/profile" className='nav__link'>
              <button className="nav__link-button">Аккаунт</button>
            </Link>
          </div>
        )}
    </div>
  )
}
