import React, { InputHTMLAttributes } from "react";
import "./input.css";

type InputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ name, ...rest }: InputProps) {
  return (
    <div className="container">
      <label>{name}</label>
      <input placeholder={name} {...rest} />
    </div>
  );
}

export default Input;
