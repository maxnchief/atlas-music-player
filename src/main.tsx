const rootElement = document.getElementById("root") as HTMLElement;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import './index.css';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
