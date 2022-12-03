import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 70px auto;
  grid-template-areas: 
  "sidebar mainHeader"
  "sidebar contentContainer"
  ;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  grid-area: contentContainer;
  padding: 1rem;
  background: var(--background);
  box-shadow: inset 0 0 8px #00000050;
`;