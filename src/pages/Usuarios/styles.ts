import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.main`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .create-user-button {
      display: inline-block;
      height: 2.5rem;
      width: 9rem;
      border-radius: 0.25rem;

      background: var(--confirm);
      color: var(--white);
      text-align: center;
      font-size: 0.9rem;
      line-height: 2.5rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        font-size: 0.7rem;
        line-height: 0.7rem;
        margin-bottom: 0;
      }
    }
  }
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

      &.options {
        text-align: right;

        button, a {
          display: inline-block;
          width: 3rem;
          height: 1.7rem;

          font-size: 1rem;
          line-height: 1.7rem;
          text-align: center;
          color: var(--white);

          border: none;
          border-radius: 0.25rem;
          margin: 0 0.5rem;
          box-shadow: 0 0 8px #00000070;
        }
      }
    }
  }
`;