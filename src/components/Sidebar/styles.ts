import styled from "styled-components";
import { transparentize } from "polished";

export const SidebarMenu = styled.div`
  grid-area: sidebar;
  background: var(--shape);
  position: relative;

  h1 {
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 500;
    margin-left: 1rem;
    line-height: 70px;
  }
`;

export const Nav = styled.nav`
  
  a {
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--white);
    padding: 1.5rem;

    transition: all 0.2s;

    &:hover, &.active {
      color: var(--white);
      background: ${transparentize(0.9, "#ffffff")};
      border-left: solid 4px var(--confirm);
    }
  }
`;