import { server } from "./services/miragejs";
import { Router } from "./routes";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";
import { useEffect } from "react";
import { AuthProvider } from "./hooks/useAuth";

Modal.setAppElement("#root");

export function App() {

  useEffect(() => {
    server();
  }, [])  

  return (
    <AuthProvider>
      <Router />
      <GlobalStyle />
      <ToastContainer />
    </AuthProvider>
  );
}