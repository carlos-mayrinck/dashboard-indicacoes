import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 100px auto;
  grid-template-areas: 
  "sidebar mainHeader"
  "sidebar contentContainer"
  ;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  grid-area: contentContainer;
  padding: 1rem;
  background-color: var(--white);
`;