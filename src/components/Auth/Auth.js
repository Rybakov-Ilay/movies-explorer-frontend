import React from "react";
import "./Auth.css"
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Auth(props) {
  return (
    <section className="auth">
      <Link className="auth__logo" to="/">
        <img src={logo} alt="Логотип"/>
      </Link>
      <h2 className="auth__title">{props.title}</h2>
      <form className="auth__form" onSubmit={props.handleSubmit}>
        {props.children}
        <button type="submit" className="auth__button">{props.buttonText}</button>
      </form>
      <div className="auth__link-wrap">
        <p className="auth__question-text">{props.questionAuthText}</p>
        <Link className="auth__link" to={props.pathLink}>{props.linkText}</Link>
      </div>
    </section>
  );
}
