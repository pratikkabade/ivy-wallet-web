import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UrlContextProvider from "./context/UrlContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UrlContextProvider>
      <App />
    </UrlContextProvider>
  </React.StrictMode>
);
