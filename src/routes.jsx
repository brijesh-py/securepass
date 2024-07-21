import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import Layout from "./Layout";

const routes = createBrowserRouter(
  createRoutesFromChildren([<Route key={1} path="/" element={<Layout />} />])
);

export default routes;
