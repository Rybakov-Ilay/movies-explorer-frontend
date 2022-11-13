import React from "react";
import "./BurgerMenu.css"
import { Link } from "react-router-dom";
import usePathName from "../../utils/usePathName";

export default function BurgerMenu(props) {
  const currentPath = usePathName()
  const classNameLink = (path) => {
    return `burger-menu__link ${currentPath === path ? "burger-menu__link_active" : ""}`
  }

  return (
    <div className={`burger-menu ${props.visible ? "burger-menu__hidden" : ""}`}>
      <button className="burger-menu__close" onClick={props.onclickCloseMenu}/>
      <nav className="burger-menu__wrap">
        <ul className="burger-menu__links">
          <li className="burger-menu__item">
            <Link to="/"
                  className={classNameLink("/")}>
              Главная
            </Link>
          </li>
          <li className="burger-menu__item">
            <Link to="/movies"
                  onClick={props.onclickCloseMenu}
                  className={classNameLink("/movies")}>
              Фильмы
            </Link>
          </li>
          <li className="burger-menu__item">
            <Link to="/saved-movies"
                  onClick={props.onclickCloseMenu}
                  className={classNameLink("/saved-movies")}>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className='burger-menu__link-to-account'>
          <button
            onClick={props.onclickCloseMenu}
            className={`burger-menu__link-button ${currentPath === "/profile" ? "burger-menu__link_active" : ""}`}>Аккаунт
          </button>
        </Link>
      </nav>
    </div>
  )
}
