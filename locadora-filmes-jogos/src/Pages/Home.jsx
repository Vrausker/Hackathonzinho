import Login from "../Components/Login";
import "../Styles/Home.css";

const HomePage = () => {
  return (
    <section className="headerGrid">
      <div className="wrapper">
        <h1>
          FICAR PRESO EM ASSINATURAS? <br />
          NUNCA MAIS!
        </h1>
        <h2>
          Locação descomplicada de games e filmes para você usufruir como e onde
          quiser.
        </h2>
        <Login />
      </div>
      <div className="wrapper">
        <img src="src\assets\filme_01.png" />
        <img src="src\assets\filme_02.png" />
        <img src="src\assets\filme_03.png" />
        <img src="src\assets\filme_04.png" />
      </div>
    </section>
  );
};

export default HomePage;
