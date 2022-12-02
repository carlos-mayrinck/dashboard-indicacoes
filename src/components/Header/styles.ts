import styled from "styled-components";

export const Container = styled.header`
  grid-area: mainHeader;
  
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  background: var(--shape);

  span {
    font-weight: 700;
    color: var(--white);
  }
`;