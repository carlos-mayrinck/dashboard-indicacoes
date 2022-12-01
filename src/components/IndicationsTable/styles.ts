import styled from "styled-components";

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