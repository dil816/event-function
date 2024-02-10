import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AjendacontextProvider } from "./context/Ajendacontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AjendacontextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AjendacontextProvider>
  </React.StrictMode>
);
