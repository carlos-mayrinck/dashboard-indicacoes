import { FilterIndicationsForm } from "../../components/FilterIndicationsForm";
import { IndicationsTable } from "../../components/IndicationsTable";
import { PageTitle } from "../../components/PageTitle";

import { Container, ContentContainer } from "./styles";


export function Indicacoes() {

  return (
    <Container>
      <PageTitle>Indicações</PageTitle>
      <ContentContainer>
        <FilterIndicationsForm />

        <IndicationsTable />
      </ContentContainer>
    </Container>
  );
}