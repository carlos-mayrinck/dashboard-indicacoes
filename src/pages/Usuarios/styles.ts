import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.main`

`;

export const ContentContainer = styled.div`
  background: var(--shape);
  border-radius: 0.5rem;
  box-shadow: 0 0 8px #00000090;
  border: solid 1px var(--border);
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 0.5rem;

  thead {
    th {
      background: var(--background);
      color: var(--white);
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0.5rem 1rem;
      text-align: left;
      font-weight: 700;

      &:last-child {
        text-align: right;
        padding-right: 2rem;
      }
    }
  }

  tbody {
    td {
      color: var(--white);
      padding: 0.5rem 1rem;
      border-top: solid 1px var(--border);

      a {
        font-size: 1rem;
        display: inline-block;
        margin-bottom: 0.25rem;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        font-size: 0.8rem;
        line-height: 1rem;
        color: ${darken(0.2, "#eeeef2")};
      }

      button {
        border: none;
        background: transparent;
        color: var(--white);
        font-size: 1.3rem;
        margin-left: auto;
        margin-right: 2rem;
        display: block;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;