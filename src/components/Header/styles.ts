import styled from "styled-components";

export const Container = styled.header`
  grid-area: mainHeader;
  
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  background: var(--shape);

  nav {
    display: flex;
    align-items: center;

    > span {
      font-weight: 700;
      color: var(--white);
      margin-right: 1rem;
    }

    button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
      color: var(--white);
      margin-left: 1rem;

      span {
        margin-left: 0.5rem;
      }
    }
  }
`;