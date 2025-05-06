import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ExtensionContext } from "./Context/ExtentionContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExtensionContext>
      <App />
    </ExtensionContext>
  </StrictMode>
);
