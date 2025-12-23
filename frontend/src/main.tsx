import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage } from "./pages";
import { Header } from "./widgets";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route Component={Homepage} path="/" />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
