import React, { useEffect } from "react";
import "./Register.css"
import Auth from "../Auth/Auth";
import InputForm from "../InputForm/InputForm";
import Error from "../Error/Error";
import { useFormWithValidation } from "../../utils/useFormValidation";

export default function Register({ isSingUp, onSingUp }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation()

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
