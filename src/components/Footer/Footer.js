import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__intro">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer-container">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/Rybakov-Ilay">
              Github
            </a>
          </li>
        </ul>
        <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
