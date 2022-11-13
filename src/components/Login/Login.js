import React from "react";
import "./Login.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";

export default function Login() {
  return (
    <Auth
      buttonText="Войти"
      title="Рады видеть!"
      questionAuthText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      pathLink="/signup"
    >
      <InputForm
        labelName="E-mail"
        name="email"
        type="email"
        id="email-input"
      />
      <InputForm
        labelName="Пароль"
        name="password"
        type="password"
        id="password-input"
      />
    </Auth>
  );
}
