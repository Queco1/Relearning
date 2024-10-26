import Input from "@/components/input";
import React from "react";
import "./login.css";
import Button from "@/components/button";

function Login() {
  return (
    <div>
      <form className="container">
        <Input name="E-mail" />
        <Input name="Senha" />
        <Button>Salvar</Button>
      </form>
    </div>
  );
}

export default Login;
