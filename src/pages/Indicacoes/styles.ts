import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.main`
  background: var(--background);
  border-radius: 0.5rem;
  border: solid 1px var(--text-secondary);
  box-shadow: 0 0 5px #00000020;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  padding: 1rem;

  form {

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 1rem;
      margin-bottom: 1rem;
  
      div {
        flex: 1 0 170px;
        max-width: 200px;
        margin-right: 1rem;
        
        label {
          font-size: 0.85rem;
          line-height: 1rem;
          font-weight: 700;
          
          input[type=text], input[type=date], select {
            width: 100%;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: solid 1px var(--text-secondary);
          }
  
          svg {
            font-size: 1rem;
            margin-left: 0.25rem;
            margin-right: 1rem;
          }
        }
  
        span {
          display: block;
          font-size: 0.85rem;
          line-height: 1rem;
          font-weight: 700;
        }
      }
    }

    button {
      display: block;
      margin-left: auto;
      margin-right: 1rem;
      margin-bottom: 1rem;

      border: none;
      height: 2rem;
      width: 100px;
      border-radius: .25rem;

      font-size: 1rem;
      line-height: 2rem;
      color: var(--white);
      background: ${lighten(0.1, "#3751ff")};
      transition: 0.2s;
      &:hover {
        background: ${lighten(0.15, "#3751ff")};
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 0.5rem;

  th {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    padding: 0.5rem 1rem;
  }
  
  tbody {
    
    td {
      padding: 0.5rem 1rem;
      background: var(--white);
      color: var(--text-title);
      border-top: solid 1px var(--text-secondary);
      
      strong {
        display: block;
        font-size: 1rem;
        line-height: 1rem;
        margin-bottom: 0.3rem;
      }
      
      span {
        display: block;
        font-size: 0.8rem;
        line-height: 1rem;
        color: var(--text-secondary);
      }

      a {

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;