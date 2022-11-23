import React, { useEffect, useState } from "react";
import "./Login.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";
import { useFormWithValidation } from "../../utils/useFormValidation";
import Error from "../Error/Error";

export default function Login({onLogin, loggedIn}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation()

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
      <Error error={errors.email} isValid={isValid}/>
      <InputForm
        labelName="Пароль"
        name="password"
        type="password"
        id="password-input"
        value={values.password || ""}
        handleChange={handleChange}
      />
      <Error error={errors.password} isValid={isValid}/>
    </Auth>
  );
}
