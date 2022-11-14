import React from 'react';
import './Promo.css';
import logo from '../../images/planet_landing-logo.svg'
import { HashLink as Link } from 'react-router-hash-link';

function Promo() {

  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <Link className="promo__link" to="#about-project">
          Узнать больше
      </Link>

      <img className="promo__logo" src={logo} alt="..."/>
    </section>
  );
}

export default Promo;
