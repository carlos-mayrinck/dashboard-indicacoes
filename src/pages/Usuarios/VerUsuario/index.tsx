import { User } from "../../../Interfaces/User";
import { api } from "../../../services/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Container, ContentContainer } from "../shared";
import { PageTitle } from "../../../components/PageTitle";
import { UsersDataForm } from "../../../components/UsersDataForm";

export function VerUsuario() {

  const { id } = useParams();

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {

    api.get(`/users/${id}`)
      .then(response => setUser(response.data.user));
  }, [id]);

  return (
    <Container>
      <PageTitle>Visualizar usuário</PageTitle>

      <Link to="/usuarios">Voltar</Link>

      <ContentContainer>
        <h3>{user.name}</h3>

        <Link to={`/usuarios/editar/${user.id}`}>Editar</Link>

        <UsersDataForm user={user} />
      </ContentContainer>
    </Container>
  );
}