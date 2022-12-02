import { FilterIndicationsForm } from "../../components/FilterIndicationsForm";
import { IndicationsTable } from "../../components/IndicationsTable";

import { Container, ContentContainer } from "./styles";


export function Indicacoes() {

  return (
    <Container>
      <h1>Indicações</h1>
      <ContentContainer>
        <FilterIndicationsForm />

        <IndicationsTable />
      </ContentContainer>
    </Container>
  );
}