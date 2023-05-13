import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CustomerContextProvider } from "./context/CustomerContex.jsx";
import { EquipmentContextProvider } from "./context/EquipmentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomerContextProvider>
      <EquipmentContextProvider>
        <App />
      </EquipmentContextProvider>
    </CustomerContextProvider>
  </React.StrictMode>
);
