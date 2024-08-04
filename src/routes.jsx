import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import Docs from "./pages/Docs";

const routes = createBrowserRouter(
  createRoutesFromChildren([
    <Route key={1} path="/" element={<Layout />}>
      <Route key={2} path="/" element={<Main />} />
      <Route key={3} path="docs" element={<Docs />} />
    </Route>,
  ])
);

export default routes;
