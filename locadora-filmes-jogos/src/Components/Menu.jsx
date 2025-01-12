import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/about"> About (Teste) </Link>
    </nav>
  );
};

export default Menu;
