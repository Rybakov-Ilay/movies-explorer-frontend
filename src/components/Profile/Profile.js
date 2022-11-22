import React from "react";
import './Profile.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




export default function Profile({handelChangeProfile, loggedIn, handleSignOut}) {
  const [values, setValues] = useState({ email: "", name: "" });

  function handleSubmit(e) {
    e.preventDefault();
    handelChangeProfile({
      email: values.email,
      name: values.name,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    setValues({ email: "", name: "" });
  }, [loggedIn]);


  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Илья!</h3>
      <form onSubmit={handleSubmit} className="profile__form" name="profileForm">
        <fieldset className="profile__fieldset">
          <label>Имя</label>
          <input
            className="profile__input"
            id="userName-input"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
            value={values.name || ""}
            onChange={handleChange}
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
            value={values.email || ""}
            onChange={handleChange}
          />
        </fieldset>
        <button
          className="profile__submit"
          type="submit"
        >
          Редактировать
        </button>
        <Link to="/" className="profile__sing-out" onClick={handleSignOut}>
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}
