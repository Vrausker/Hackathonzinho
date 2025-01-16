import { useState } from "react";
import "../Styles/Login.css"

const Login = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", login);
    console.log("Senha:", pass);
  };

  return (
    <div className ="loginContainer">
      <div>
        <label>
          Login
          <input
            type="text"
            placeholder="Insira seu Login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha
          <input
            type="password"
            placeholder="Insira sua Senha"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <p className="register"> Não tem conta? Registre-se! </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
