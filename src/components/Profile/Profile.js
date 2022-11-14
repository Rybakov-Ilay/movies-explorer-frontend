import React from "react";
import './Profile.css'
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Илья!</h3>
      <form className="profile__form" name="profileForm">
        <fieldset className="profile__fieldset">
          <label>Имя</label>
          <input
            className="profile__input"
            id="userName-input"
            name="userName"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
            // value={values.email || ""}
            // onChange={handleChange}
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label>Почта</label>
          <input
            className="profile__input"
            type="email"
            id="email-input"
            name="email"
            placeholder="Почта"
            required
            minLength="2"
            maxLength="30"
            // value={values.password || ""}
            // onChange={handleChange}
          />
        </fieldset>
        <button
          className="profile__submit"
          type="submit"
        >
          Редактировать
        </button>
        <Link to="/" className="profile__sing-out">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}
