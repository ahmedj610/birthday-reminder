import React from "react";
import ReactDOM, { createRoot } from "react-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="my-container">
    <App />
  </div>
);
