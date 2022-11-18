import React, { useEffect, useState } from "react";
import "./Login.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";

export default function Login({onLogin, loggedIn}) {

  const [values, setValues] = useState({ email: "", password: "" });

  function handleSubmitLogin(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
    >
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
