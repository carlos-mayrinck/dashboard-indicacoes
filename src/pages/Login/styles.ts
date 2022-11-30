import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 2.5rem 2rem;
  border-radius: 0.25rem;
  background: var(--gray-300);

  strong {
    display: block;
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  input {
    display: block;
    height: 3rem;
    width: 100%;
    border-radius: 0.25rem;
    border: none;
    background: #ffffff;

    font-size: 1rem;
    padding: 1rem;


    & + input {
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 700;
    background: var(--blue-500);
    transition: background-color 0.2s;

    &:hover {
      background-color: ${transparentize(0.8, "#0091D5")};
    }
  }
`;