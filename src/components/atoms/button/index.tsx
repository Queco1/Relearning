import React from "react";

type buttonProps = {
  children: React.ReactNode;
};

function Button(props: buttonProps) {
  return (
    <button type="button" className="btn btn-primary">
      {props.children}
    </button>
  );
}

export default Button;
