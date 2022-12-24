import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { IndicationsProvider } from "../hooks/useIndications";
import { Indicacoes } from "../pages/Indicacoes";
import { VerIndicacao } from "../pages/Indicacoes/VerIndicacao";
import { Overview } from "../pages/Overview";
import { Usuarios } from "../pages/Usuarios";
import { CriarUsuario } from "../pages/Usuarios/CriarUsuario";
import { EditarUsuario } from "../pages/Usuarios/EditarUsuario";
import { VerUsuario } from "../pages/Usuarios/VerUsuario";

export function AppRoutes() {

  return (
    <IndicationsProvider>
      <Layout>
        <Routes>
          <Route path="/indicacoes" element={<Indicacoes />} />
          <Route path="/indicacoes/ver/:id" element={<VerIndicacao />} />

          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/ver/:id" element={<VerUsuario />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
          <Route path="/usuarios/criar" element={<CriarUsuario />} />

          <Route path="/" element={<Overview />} />
        </Routes>
      </Layout>
    </IndicationsProvider>
  )
}