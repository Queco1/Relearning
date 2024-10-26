import React, { ButtonHTMLAttributes } from "react";

type buttonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: buttonProps) {
  return (
    <>
      <button {...rest} className="btn btn-primary">
        {children}
      </button>
    </>
  );
}

export default Button;
