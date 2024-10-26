import React, { ButtonHTMLAttributes } from "react";
import "./button.css";

type buttonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: buttonProps) {
  return (
    <>
      <button {...rest} type="button" className=" button btn btn-primary">
        {children}
      </button>
    </>
  );
}

export default Button;
