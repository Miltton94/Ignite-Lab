import { Route, Routes } from "react-router-dom";
import Event from "../pages/Event";
import Subcribe from "./Subcribe";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Subcribe />}
      />
      <Route
        path="/event"
        element={<Event />}
      />
      <Route
        path="/event/lesson/:slug"
        element={<Event />}
      />
    </Routes>
  );
};
export default Router;
