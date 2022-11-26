import React, { useEffect } from "react";
import "./Login.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";
import { useFormWithValidation } from "../../utils/useFormValidation";
import Error from "../Error/Error";
import * as EmailValidator from 'email-validator';
import {
  DEFAULT_ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_EMAIL,
  ERROR_MESSAGE_PASSWORD,
  PASSWORD_PATTERN
} from "../../utils/constant";

export default function Login({ onLogin, loggedIn }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation()
  const isValidEmail = EmailValidator.validate(values.email)

  if (errors.email === "" && !isValidEmail) {
    errors.email = ERROR_MESSAGE_EMAIL
  }

  if (errors.password === DEFAULT_ERROR_MESSAGE_PASSWORD) {
    errors.password = ERROR_MESSAGE_PASSWORD
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  useEffect(() => {
    setValues({ email: "", password: "" });
  }, [loggedIn]);

  return (
    <Auth
      buttonText="Войти"
      title="Рады видеть!"
      questionAuthText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      pathLink="/signup"
      handleSubmit={handleSubmitLogin}
      isValid={isValid}
      onResetForm={resetForm}
      loggedIn={loggedIn}
    >
      <InputForm
        labelName="E-mail"
        name="email"
        type="email"
        id="email-input"
        value={values.email || ""}
        handleChange={handleChange}
      />
      <Error error={errors.email} isValid={isValidEmail}/>
      <InputForm
        labelName="Пароль"
        name="password"
        type="password"
        id="password-input"
        value={values.password || ""}
        handleChange={handleChange}
        pattern={PASSWORD_PATTERN}
      />
      <Error error={errors.password} isValid={isValid}/>
    </Auth>
  );
}
