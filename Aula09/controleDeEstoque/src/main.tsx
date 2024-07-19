import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import App from "./App.tsx";
import { ProductProvider } from "./context/ProductsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ProductProvider>
  </React.StrictMode>
);
