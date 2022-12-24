import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 1.5rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: var(--shape);
  box-shadow: 0 0 8px #00000050;
  border: solid 1px var(--border);
  border-radius: 0.25rem;
  padding: 1.5rem;
  margin: 0 auto;

  h2 {
    color: var(--white);
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.2rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--white);
    }

    input {
      display: block;
      background: ${transparentize(0.9, "#ffffff")};
      border-radius: 0.25rem;
      border: none;
      padding: 0 0.85rem;
      height: 2rem;
      width: 100%;
  
      font-size: 0.9rem;
      line-height: 2rem;
      color: var(--white);
    }

    p {
      color: var(--danger);
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      font-size: 0.8rem;
    }
  }

  button {
    display: block;
    margin: 0 auto;
    width: 6rem;
    height: 2.5rem;
    font-size: 0.9rem;
    line-height: 2rem;
    background: var(--success);
    color: var(--white);
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;