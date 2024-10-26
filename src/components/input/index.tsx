import React, { InputHTMLAttributes } from "react";
import "./input.css";

type InputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ name, ...rest }: InputProps) {
  return (
    <div className="containerInput">
      <label>{name}</label>
      <input placeholder={name} {...rest} id="input" />
    </div>
  );
}

export default Input;
