import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Router() {

  const { loggedIn } = useAuth();

  return (
    <BrowserRouter>
      {loggedIn ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}