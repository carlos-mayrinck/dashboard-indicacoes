import styled from "styled-components";

export const Container = styled.main`
  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const ContentContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  section {
    flex: 1 0 400px;
    margin: 0 1rem 1rem;
    background: var(--shape);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 10px #00000030;
    border: solid 1px var(--border);
    
    h3 {
      text-align: center;
      color: var(--white);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;