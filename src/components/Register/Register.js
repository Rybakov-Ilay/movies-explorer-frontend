import React from "react";
import "./Register.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";

export default function Register() {
  return (
    <Auth
      buttonText="Зарегистрироваться"
      title="Добро пожаловать!"
      questionAuthText="Уже зарегистрированы?"
      linkText="Войти"
      pathLink="/signin"
    >
      <InputForm
        labelName="Имя"
        name="username"
        type="text"
        id="username-input"
      />
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
