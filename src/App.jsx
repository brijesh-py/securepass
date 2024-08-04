import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
