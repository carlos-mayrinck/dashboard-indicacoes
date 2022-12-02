import { BrowserRouter } from "react-router-dom";
import { IndicationsProvider } from "../hooks/useIndications";

import { AppRoutes } from "./app.routes";

export function Router() {

  return (
    <BrowserRouter>
      <IndicationsProvider>
        <AppRoutes />
      </IndicationsProvider>
    </BrowserRouter>
  );
}