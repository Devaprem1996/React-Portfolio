import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
