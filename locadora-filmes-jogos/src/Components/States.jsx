import { useState } from "react"
import Login from "./Login";

const States = () => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login:", login);
        console.log("Senha:", pass);
      };
    
    return (
        <form onSubmit={handleSubmit}>
        <Login
            login={login}
            setLogin={setLogin}
            pass={pass}
            setPass={setPass}
        />
        <button type="submit"> Entrar  
        </button>
        </form>
    );

}

export default States;