import React from 'react';
import './AboutMe.css';
import '../SectionTitle/SectionTitle.css'
import foto from '../../images/my-foto.png';

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__foto" src={foto} alt="Илья"/>
        <div className="about-me__text-content">
          <p className="about-me__name">Илья</p>
          <p className="about-me__job">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
            музыку,
            а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как
            прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
