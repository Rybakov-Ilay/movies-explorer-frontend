import React, { useEffect } from "react";
import "./Auth.css"
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Auth({
                               title,
                               handleSubmit,
                               onResetForm,
                               loggedIn,
                               isValid,
                               buttonText,
                               questionAuthText,
                               pathLink,
                               linkText,
                               children
                             }) {

  useEffect(() => {
    onResetForm();
  }, [loggedIn]);

  return (
    <section className="auth">
      <Link className="auth__logo" to="/">
        <img src={logo} alt="Логотип"/>
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {children}
        <button type="submit" className="auth__button" disabled={!isValid}>{buttonText}</button>
      </form>
      <div className="auth__link-wrap">
        <p className="auth__question-text">{questionAuthText}</p>
        <Link className="auth__link" to={pathLink}>{linkText}</Link>
      </div>
    </section>
  );
}
