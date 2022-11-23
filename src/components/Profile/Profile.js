import React, { useContext, useEffect } from "react";
import './Profile.css'
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormValidation";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Error from "../Error/Error";


export default function Profile({ handelChangeProfile, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation()

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handelChangeProfile({
      email: values.email,
      name: values.name,
    });
  }

  return (
    <section className="profile">
      <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
      <form onSubmit={handleSubmit} className="profile__form" name="profileForm" noValidate>
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
        <Error isValid={isValid} error={errors.name}/>
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
        <Error isValid={isValid} error={errors.email}/>
        <button
          className="profile__submit"
          type="submit"
          disabled={!isValid}
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
