import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import CadLoginPage from "../Pages/Cadastro/CadLogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<CadLoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
