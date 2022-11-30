import styled from "styled-components";

export const Container = styled.header`
  grid-area: mainHeader;
  
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background);
  border-bottom: solid 1px var(--text-secondary);
`;