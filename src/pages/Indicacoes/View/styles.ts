import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.main`

  a {
    display: inline-block;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: var(--white);
    
    &:hover {
      color: var(--white);
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`
  background: var(--shape);
  padding: 1rem;
  border-radius: 0.25rem;

  h2 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    color: var(--white);
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--white);
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    div {
      flex: 1 0 300px;

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
        
        strong {
          display: block;
          font-size: 0.8rem;
          line-height: 1.2rem;
          color: ${darken(0.2, "#EEEEF2")};
        }
      }
    }
  }
`;