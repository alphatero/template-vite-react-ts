import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const element = document.getElementById("root");
if (!element) {
  throw new Error("should include #root element in your html document.");
}

ReactDOM.createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
