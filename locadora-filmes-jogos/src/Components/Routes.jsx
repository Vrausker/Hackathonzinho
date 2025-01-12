import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
};

export default AppRoutes;