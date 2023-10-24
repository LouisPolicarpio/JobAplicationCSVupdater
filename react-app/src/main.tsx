import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/JobApp";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
