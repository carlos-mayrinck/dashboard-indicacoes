import { FilterIndicationsForm } from "../../components/FilterIndicationsForm";
import { IndicationsTable } from "../../components/IndicationsTable";

import { Container } from "./styles";


export function Indicacoes() {

  return (
    <Container>
      <FilterIndicationsForm />

      <IndicationsTable />
    </Container>
  );
}