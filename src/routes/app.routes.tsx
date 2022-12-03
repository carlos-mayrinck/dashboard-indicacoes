import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Indicacoes } from "../pages/Indicacoes";
import { ViewIndicacao } from "../pages/Indicacoes/View";
import { Overview } from "../pages/Overview";
import { Usuarios } from "../pages/Usuarios";
// import { EditUsuario } from "../pages/Usuarios/Edit";
import { ViewUsuario } from "../pages/Usuarios/View";

export function AppRoutes() {

  return (
    <Layout>
      <Routes>
        <Route path="/indicacoes" element={<Indicacoes />} />
        <Route path="/indicacoes/view/:id" element={<ViewIndicacao />} />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/view/:id" element={<ViewUsuario />} />
        {/* <Route path="/usuarios/edit/:id" element={<EditUsuario />} /> */}

        <Route path="/" element={<Overview />} />
      </Routes>
    </Layout>
  )
}