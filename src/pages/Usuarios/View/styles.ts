import styled from "styled-components";


export const Container = styled.main`

  > a {
    display: inline-block;
    margin-bottom: 1.5rem;
    color: var(--white);
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
      color: var(--white);
    }
  }
`;

export const ContentContainer = styled.div`
  background: var(--shape);
  border-radius: 0.5rem;
  border: solid 1px var(--border);
  box-shadow: 0 0 6px #00000070;
  padding: 1rem;

  h3 {
    display: inline-block;
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  > a {
    float: right;
    margin-right: 1rem;

    background: var(--confirm);
    height: 2.5rem;
    width: 6rem;
    border-radius: 0.25rem;
    
    text-align: center;
    font-size: 0.9rem;
    line-height: 2.5rem;
    color: var(--white);
    
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.86);
      color: var(--white);
    }
  }
`;