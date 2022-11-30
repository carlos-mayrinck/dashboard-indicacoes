import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Indicacoes } from "../pages/Indicacoes";
import { View } from "../pages/Indicacoes/View";
import { Overview } from "../pages/Overview";
import { Usuarios } from "../pages/Usuarios";

export function AppRoutes() {

  return (
    <Layout>
      <Routes>
        <Route path="/indicacoes" element={<Indicacoes />} />
        <Route path="/indicacoes/view/:id" element={<View />}/>

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/" element={<Overview />} />
      </Routes>
    </Layout>
  )
}