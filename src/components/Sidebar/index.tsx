
import { NavLink } from "../NavLink";
import { Nav, SidebarMenu } from "./styles";

export function Sidebar() {
  return (
    <SidebarMenu>
      <h1>Dashboard</h1>

      <Nav>
        <NavLink to="/" shouldMatchExactHref={true}>Overview</NavLink>

        <NavLink to="/indicacoes">Indicações</NavLink>

        <NavLink to="/conversoes">Conversões</NavLink>

        <NavLink to="/usuarios">Usuários</NavLink>
      </Nav>
    </SidebarMenu>
  );
}