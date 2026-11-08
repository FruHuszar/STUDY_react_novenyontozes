import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NovenyProvider } from "./contexts/NovenyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NovenyProvider>
      <App />
    </NovenyProvider>
  </StrictMode>,
);
