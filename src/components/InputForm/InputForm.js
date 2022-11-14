import React from "react";
import "./InputForm.css"

export default function InputForm(props) {
  return (
    <div className="input-form">
      <label className="input__label">{props.labelName}</label>
      <input
        className="input-form__input"
        type={props.type}
        name={props.name}
        id={props.id}
        required
        minLength="2"
        maxLength="32"
      />
    </div>
  );
}
