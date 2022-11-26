import React, { useContext, useEffect } from "react";
import './Profile.css'
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormValidation";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Error from "../Error/Error";
import * as EmailValidator from "email-validator";
import {
  DEFAULT_ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_EMAIL,
  ERROR_MESSAGE_NAME,
  NAME_PATTERN
} from "../../utils/constant";
import SuccessMessage from "../SuccessMessage/SuccessMessage";


export default function Profile({ handelChangeProfile, handleSignOut, updateProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation()
  const isValidEmail = EmailValidator.validate(values.email)



  if (errors.email === "" && !isValidEmail) {
    errors.email = ERROR_MESSAGE_EMAIL
  }

  if (errors.name === DEFAULT_ERROR_MESSAGE_PASSWORD) {
    errors.name = ERROR_MESSAGE_NAME
  }

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
      <SuccessMessage message={"Профиль обновлен"} updateProfile={updateProfile}/>
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
            pattern={NAME_PATTERN}
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
        <Error isValid={isValidEmail} error={errors.email}/>
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
