import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://rybakov-ilay.github.io/how-to-learn/"
             target="_blank" rel="noreferrer">
            <p className="portfolio__subtitle">Статичный сайт</p>
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://rybakov-ilay.github.io/mesto/"
             target="_blank" rel="noreferrer">
            <p className="portfolio__subtitle">Адаптивный сайт</p>
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mesto.ilya.nomoredomains.icu/"
             target="_blank" rel="noreferrer">
            <p className="portfolio__subtitle">Одностраничное приложение</p>
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
