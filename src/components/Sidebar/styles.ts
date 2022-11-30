import styled from "styled-components";
import { transparentize } from "polished";

export const SidebarMenu = styled.div`
  grid-area: sidebar;
  background: var(--shape);

  h1 {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-weight: 500;
    margin-left: 1rem;
    line-height: 100px;
  }
`;

export const Nav = styled.nav`
  
  a {
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-secondary);
    padding: 1.5rem;

    transition: all 0.2s;

    &:hover, &.active {
      color: var(--text-selected);
      background: ${transparentize(0.8, "#9FA2B4")};
      border-left: solid 3px var(--text-selected);
    }
  }
`;