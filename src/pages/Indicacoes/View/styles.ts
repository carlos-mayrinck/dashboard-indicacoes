import styled from "styled-components";

export const Container = styled.main`
  background: var(--white);
  padding: 1rem;
  border-radius: 0.25rem;

  a {
    display: inline-block;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const ContentContainer = styled.div`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
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
        color: var(--text-primary);
        margin-bottom: 1rem;
        
        strong {
          display: block;
          font-size: 0.9rem;
          line-height: 1.5rem;
          color: var(--text-secondary);
        }
      }
    }
  }
`;