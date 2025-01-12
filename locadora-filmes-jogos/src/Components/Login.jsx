const Login = ({login, setLogin, pass, setPass}) => {
  return (
    <div>
      <label>
        Login <input type="text"
        placeholder="Insira seu Login"
        name="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)} />
      </label>
      <br />
      <label>
        Senha <input type="password"
        placeholder="Insira sua Senha"
        name="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)} />
      </label>
    </div>
  );
};

export default Login;
