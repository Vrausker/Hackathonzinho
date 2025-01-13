import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import AppRoutes from "./Components/Routes"
import Menu from "./Components/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Menu />
      <AppRoutes/>
    </Router>
  </StrictMode>
);
