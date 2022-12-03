import { transparentize } from "polished";
import styled from "styled-components";

export const Form = styled.form`

  div {
    margin-bottom: 1rem;

    label {
      display: block;
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    input {
      display: inline-block;
      width: 100%;
      max-width: 400px;
      height: 2.5rem;
      background: ${transparentize(0.9, "#ffffff")};
      border: none;
      padding: 0 0.7rem;

      border-radius: 0.3rem;
      font-size: 0.9rem;
      color: var(--white);
    }
  }

  button[type=submit] {
    height: 2.5rem;
    width: 6rem;
    background: var(--success);
    color: var(--white);
    border: none;
    border-radius: 0.25rem;
    margin-top: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;