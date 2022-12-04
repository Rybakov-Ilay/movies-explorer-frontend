import React from 'react';
import './AboutMe.css';
import '../SectionTitle/SectionTitle.css'
import foto from '../../images/my-foto.jpg';

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__foto" src={foto} alt="Илья"/>
        <div className="about-me__text-content">
          <p className="about-me__name">Илья</p>
          <p className="about-me__job">
            Frontend и backend-разработчик, 37 лет
          </p>
          <p className="about-me__description">
            Я работаю и живу в Санкт-Петербурге, закончил факультет электроники СПбГЭТУ "ЛЭТИ". С 2020 года увлекся
            программированием и закончил два курса Я.Практикума по специальности
            python-разработчик и frontend-разработчик. Я женат и являюсь счастливым отцом двух прекрасных мальчиков. 
          </p>
          <a href="https://github.com/Rybakov-Ilay" className="about-me__link" target="_blank"
             rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
