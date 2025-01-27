import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav>
        <img src="src\assets\marca.png" alt="logo-locaflick" />
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("Boolean_Funciona", !menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/"> Início </NavLink>
          </li>
          <li>
            <NavLink to="/filmes"> Filmes </NavLink>
          </li>
          <li>
            <NavLink to="/games"> Games </NavLink>
          </li>
          <li>
            <NavLink to="/politica"> Política de Privacidade </NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login | Cadastre </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
