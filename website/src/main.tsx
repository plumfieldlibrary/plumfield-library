import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { ThemeProvider } from "@/components/theme-provider.tsx";
import App from "@/pages/Index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </ThemeProvider>

    </BrowserRouter>
  </StrictMode>
)
