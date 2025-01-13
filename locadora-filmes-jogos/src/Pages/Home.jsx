import Login from "../Components/Login";
import "../Styles/Home.css"

const HomePage = () => {
  return (
    <div className="home">
        <div className="header">
        <h1>FICAR PRESO EM ASSINATURAS?</h1>
        <h1>NUNCA MAIS!</h1>
        <p>Locação descomplicada de games e filmes para você usufruir como e onde quiser.</p>
        </div>
        <p>Bem-vindo! Faça Login:</p>
        <Login/>
        <img src="src\assets\filme_01.png"/>
        <img src="src\assets\filme_02.png"/>
        <img src="src\assets\filme_03.png"/>
        <img src="src\assets\filme_04.png"/>
    </div>
  );
};

export default HomePage;
