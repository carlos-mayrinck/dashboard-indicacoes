import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { api } from "../../services/api";
import { Container, ContentContainer, Table } from "./styles";
import { PageTitle } from "../../components/PageTitle";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
}

export function Usuarios() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get("users")
      .then(response => setUsers(response.data.users));
  }, []);

  return (
    <Container>
      <PageTitle>Usuários</PageTitle>

      <ContentContainer>
        <Table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Role</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.id}>
                  <td>
                    <Link to={`view/${user.id}`}><strong>{user.name}</strong></Link>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    <span>{user.role}</span>
                  </td>
                  <td>
                    <button
                      type="button"
                    >
                      <BiDotsVerticalRounded />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </ContentContainer>
    </Container>
  );
}