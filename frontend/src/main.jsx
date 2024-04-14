import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AjendacontextProvider } from "./context/Ajendacontext.jsx";
import { EventcontextProvider } from "./context/Eventcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventcontextProvider>
      <AjendacontextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AjendacontextProvider>
    </EventcontextProvider>
  </React.StrictMode>
);
