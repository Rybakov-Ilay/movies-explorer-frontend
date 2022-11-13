import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import usePathName from "../../utils/usePathName";

function Header() {
  const currentPath = usePathName()
  console.log(currentPath);
  return (
    <header className={`header ${currentPath === "/" ? "header__theme_landing" : ""}`}>
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Логотип"/>
        {
          currentPath === "/" ?
            (
              <div className="header__auth"><Link to="/signup" className="header__link">Регистрация</Link>
                <Link to="/signin" className="header__link-button">
                  <button type="button" className="header__button">
                    Войти
                  </button>
                </Link>
              </div>
            ) :
            (
              <Navigation/>
            )
        }

      </div>
    </header>
  );
}

export default Header;
