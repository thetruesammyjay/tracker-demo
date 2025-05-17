import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopDashboard } from "./screens/DesktopDashboard/DesktopDashboard";
import "./wormhole-connect.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopDashboard />
  </StrictMode>,
);