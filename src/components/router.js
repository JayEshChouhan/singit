import { Routes, Route } from "react-router-dom";
import NotFound from "./errorPages/notFound";
import Lesson from "../pages/lesson/lesson";

const Router = (props) => {

  return <Routes>
    <Route exact path="/" element={<h1>Wel-Come </h1>} />
    <Route exact path="/lesson" element={<Lesson />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
};

export default Router;