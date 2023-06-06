import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.js";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
