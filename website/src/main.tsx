import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "@/components/theme-provider.tsx";
import App from "@/pages/Index.tsx";
import { PolicySection } from "./components/PolicySection";
import "./index.css";
import { LibraryPolices, PolicyLandingPage } from "./pages/LibraryPolices";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/library-policies" element={<LibraryPolices />} >
              <Route index element={<PolicyLandingPage />}></Route>
              <Route path=":section" element={<PolicySection />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </ThemeProvider>

    </BrowserRouter>
  </StrictMode>
)
