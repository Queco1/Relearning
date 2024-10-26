import Input from "@/components/input";
import React from "react";
import "./login.css";
import Button from "@/components/button";

function Login() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="tituloLogin">Login</h1>
        <form>
          <Input name="E-mail" />
          <Input name="Senha" />
          <Button>Salvar</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
