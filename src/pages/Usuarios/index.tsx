import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { User } from "../../Interfaces/User";

import { ConfirmDeletingUserModal } from "../../components/ConfirmDeletingUserModal";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Container, ContentContainer, Table } from "./styles";

export function Usuarios() {

  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | number>("");

  useEffect(() => {
    api.get("users")
      .then(response => setUsers(response.data.users));
  }, []);

  function handleOpeningModalDeleteUser(userId: string | number) {
    setUserIdToDelete(userId);
    setIsModalOpen(true);
  }

  function handleClosingModalDeleteUser() {
    setIsModalOpen(false);
  }

  function handleDeletingUser() {
    const id = userIdToDelete;
    const response = api.delete(`users/${id}`);

    setIsModalOpen(false);

    const toastDisplay = toast.promise(response, {
      pending: "Deletando usuário.",
      success: "Usuário deletado com sucesso.",
      error: "Não foi possível deletar o usuário."
    });

    Promise.all([response, toastDisplay])
      .then(data => {
        if (data[0].status === 204) {
          const updatedUsersList = users.filter(user => user.id !== id);
          setUsers(updatedUsersList);
        }
      });
  }

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
                    <Link to={`ver/${user.id}`}><strong>{user.name}</strong></Link>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    <span>{user.role}</span>
                  </td>
                  <td className="options">
                    <Link
                      to={`ver/${user.id}`}
                      style={{ background: "#248232" }}
                    >
                      <FaEye />
                    </Link>

                    <Link
                      to={`editar/${user.id}`}
                      style={{ background: "#3083DC" }}
                    >
                      <FaPencilAlt />
                    </Link>

                    <button
                      type="button"
                      style={{ background: "#FF220C" }}
                      onClick={() => { handleOpeningModalDeleteUser(user.id) }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </ContentContainer>

      <ToastContainer />
      <ConfirmDeletingUserModal
        isOpen={isModalOpen}
        onRequestClose={handleClosingModalDeleteUser}
        onRequestDelete={handleDeletingUser}
      />
    </Container>
  );
}