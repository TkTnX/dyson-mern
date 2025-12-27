import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage, ProductPage } from "./pages";
import { Contact, Footer, Header } from "./widgets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route Component={Homepage} path="/" />
            <Route Component={ProductPage} path="/products/:productId" />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
