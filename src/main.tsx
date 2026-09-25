import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CharacterCounter from "./CharacterCounter";
import { ThemeProvider } from "./context/ThemeContext";
import "./base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CharacterCounter />
    </ThemeProvider>
  </StrictMode>,
);
