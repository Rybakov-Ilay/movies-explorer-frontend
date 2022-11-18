import React, { useEffect, useState } from "react";
import "./Register.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";

export default function Register({isSingUp, onSingUp}) {
  const [values, setValues] = useState({ email: "", password: "", name: "" });

  function handleSubmitRegister(e) {
    e.preventDefault();
    onSingUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
    >
      <InputForm
        labelName="Имя"
        name="name"
        type="text"
        id="username-input"
        value={values.name || ""}
        handleChange={handleChange}
      />
      <InputForm
        labelName="E-mail"
        name="email"
        type="email"
        id="email-input"
        value={values.email || ""}
        handleChange={handleChange}
      />
      <InputForm
        labelName="Пароль"
        name="password"
        type="password"
        id="password-input"
        value={values.password || ""}
        handleChange={handleChange}
      />
    </Auth>
  );
}
