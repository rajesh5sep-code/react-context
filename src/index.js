import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Context from "./context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context.Provider value={"Rajesh"}>
    <App />
    </Context.Provider>
  </StrictMode>
);
