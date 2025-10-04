import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Header } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
  </StrictMode>
);
