import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";

export function Router() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}