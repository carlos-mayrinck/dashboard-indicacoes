import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { HiOutlineDotsVertical } from "react-icons/hi";

import { Container } from "./styles";

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
      <table>
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
                  <strong>{user.name}</strong>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                </td>
                <td>
                  <p>{user.role}</p>
                </td>
                <td>
                  <button type="button"><HiOutlineDotsVertical /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}