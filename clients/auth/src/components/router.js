import { Routes, Route, Navigate } from "react-router-dom";
import IdmCallback from "../pages/idmCallback";
import Login from "../pages/login";
import Register from "../pages/register";
import Success from "../pages/success";
import NotFound from "./errorPages/notFound";
import ResetPassword from "../pages/resetPassword";
import UpdatePassword from "../pages/updatePassword";

const Router = (props) => {
  return <Routes>
    <Route exact path="/" element={<Navigate to="/login" />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/idmCallback" element={<IdmCallback />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/reset" element={<ResetPassword />} />
    <Route exact path="/update" element={<UpdatePassword />} />
    <Route exact path="/welcome" element={<Success />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
};

export default Router;