import { Link } from "react-router-dom";
import { CreateNewUserForm } from "../../../components/CreateNewUserForm";
import { PageTitle } from "../../../components/PageTitle";

import { Container, ContentContainer } from "../shared";


export function CriarUsuario() {

  return (
    <Container>
      <PageTitle>Novo Usuário</PageTitle>

      <Link to="/usuarios">Voltar</Link>
      
      <ContentContainer>

        <CreateNewUserForm />
      </ContentContainer>
    </Container>
  )
}