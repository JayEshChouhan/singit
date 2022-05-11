import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "./errorPages/notFound";

const Router = (props) => {
  return <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
};

export default Router;