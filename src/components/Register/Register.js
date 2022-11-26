import React, { useEffect } from "react";
import "./Register.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";
import Error from "../Error/Error";
import { useFormWithValidation } from "../../utils/useFormValidation";
import {
  DEFAULT_ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_EMAIL, ERROR_MESSAGE_NAME,
  ERROR_MESSAGE_PASSWORD,
  NAME_PATTERN,
  PASSWORD_PATTERN
} from "../../utils/constant";
import * as EmailValidator from "email-validator";

export default function Register({ isSingUp, onSingUp }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation()
  const isValidEmail = EmailValidator.validate(values.email)

  if (errors.email === "" && !isValidEmail) {
    errors.email = ERROR_MESSAGE_EMAIL
  }

  if (errors.password === DEFAULT_ERROR_MESSAGE_PASSWORD) {
    errors.password = ERROR_MESSAGE_PASSWORD
  }

  if (errors.name === DEFAULT_ERROR_MESSAGE_PASSWORD) {
    errors.name = ERROR_MESSAGE_NAME
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    onSingUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  useEffect(() => {
    setValues({ email: "", password: "", name: "" });
  }, [isSingUp]);

  return (
    <Auth
      buttonText="Зарегистрироваться"
      title="Добро пожаловать!"
      questionAuthText="Уже зарегистрированы?"
      linkText="Войти"
      pathLink="/signin"
      handleSubmit={handleSubmitRegister}
      onResetForm={resetForm}
      isValid={isValid}
    >
      <InputForm
        labelName="Имя"
        name="name"
        type="text"
        id="username-input"
        value={values.name || ""}
        handleChange={handleChange}
        pattern={NAME_PATTERN}
      />
      <Error error={errors.name} isValid={isValid}/>
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
