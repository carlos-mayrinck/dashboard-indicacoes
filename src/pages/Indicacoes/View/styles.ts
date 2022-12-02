import styled from "styled-components";

export const Container = styled.main`
  background: var(--shape);
  padding: 1rem;
  border-radius: 0.25rem;

  a {
    display: inline-block;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: var(--white);

    &:hover {
      color: var(--white);
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`

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
        font-size: 1.1rem;
        margin-bottom: 1rem;
        
        strong {
          display: block;
          font-size: 0.9rem;
          line-height: 1.5rem;
          color: var(--white);
        }
      }
    }
  }
`;