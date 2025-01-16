import { Link } from "react-router-dom";
import "../Styles/Menu.css";

const Menu = () => {
  return (
    <div>
      <nav>
        <img src="src\assets\marca.png" alt="logo-locaflick"/>
        <Link to="/"> Início </Link>
        <Link to="/filmes"> Filmes </Link>
        <Link to="/games"> Games </Link>
        <Link to="/politica"> Política de Privacidade </Link>
        <Link to="/login"> Login | Cadastre </Link>
      </nav>
    </div>
  );
};

export default Menu;
