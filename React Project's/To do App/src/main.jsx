import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import Wrapper from "./Wrapper.jsx";
createRoot(document.getElementById("root")).render(
  <Wrapper>
     <App />
    <ToastContainer position="top-center" />
  </Wrapper>
);
