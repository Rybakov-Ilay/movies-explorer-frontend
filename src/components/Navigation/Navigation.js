import React, { useState } from "react";
import './Navigation.css'
import useGetWindowWidth from "../../utils/useGetWindowWidth";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import usePathName from "../../utils/usePathName";

export default function Navigation() {
  const currentPath = usePathName()
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
                <Link to="/movies"
                      className={`nav__link ${currentPath === '/movies' ? "nav__link_active" : ""} ${currentPath === "/" ? "nav__link_logged-in" : ""}`}>
                  Фильмы
                </Link>
              </li>
              <li>
                <Link to="/saved-movies" className={`nav__link ${currentPath === '/saved-movies' ? "nav__link_active" : ""} ${currentPath === "/" ? "nav__link_logged-in" : ""}`}>
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link to="/profile" className='nav__link'>
              <button className={`nav__link-button ${currentPath === "/" ? "nav__link-button_logged-in" : ""}`}>Аккаунт</button>
            </Link>
          </div>
        )}
    </div>
  )
}
