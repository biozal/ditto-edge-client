import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import '@/components/font/inter/inter.css'
import '@/components/font/ibmPlexMono/ibmPlexMono.css'
import '@/components/font/inconsolata/inconsolata.css'
import '@/components/font/aeonikPro/aeonik.css'
import '@/components/font/kairos/kairos.css'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
