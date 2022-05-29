import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeadProvider } from "react-head";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>
);
