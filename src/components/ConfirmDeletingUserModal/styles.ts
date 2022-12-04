import styled from "styled-components";

export const Container = styled.div`
  
  h2 {
    color: var(--white);
    font-size: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: inline-block;
      height: 2.25rem;
      width: 4.5rem;

      border: none;
      border-radius: 0.25rem;
      background: var(--success);
      box-shadow: 0 0 8px #00000040;

      font-size: 1rem;
      line-height: 2.25rem;
      text-align: center;
      color: var(--white);

      transition: filter 0.2s;

      & + button {
        width: 6rem;
        height: 3rem;
        margin-left: 1rem;
        background: var(--danger);
        line-height: 3rem;
        font-size: 1.15rem;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;