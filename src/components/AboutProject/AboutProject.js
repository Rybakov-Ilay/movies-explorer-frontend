import React from 'react';
import './AboutProject.css';
import '../SectionTitle/SectionTitle.css';

function AboutProject() {

  return (
    <section id="about-project" className="about-project">
      <h2 className="section__title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <article className="about-project__article">
            <h3 className="about-project__article-title">Дипломный проект включал 5&nbsp;этапов</h3>
            <p className="about-project__article-description">
              Составление плана, работу над бэкендом, вёрстку,
              добавление функциональности и финальные доработки.
            </p>
          </article>
        </li>
        <li className="about-project__item">
          <article className="about-project__article">
            <h3 className="about-project__article-title">На выполнение диплома ушло 5&nbsp;недель</h3>
            <p className="about-project__article-description">
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.
            </p>

          </article>
        </li>
      </ul>
      <div className="about-project__timing">
        <div className="about-project__timing-item about-project__timing-item_one-week">1 неделя</div>
        <p className="about-project__timing-item about-project__timing-item_four-weeks">4 недели</p>
        <p className="about-project__timing-item about-project__timing-item_label">Back-end</p>
        <p className="about-project__timing-item about-project__timing-item_label">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
