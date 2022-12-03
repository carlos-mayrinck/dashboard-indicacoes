import { useLocation } from "react-router-dom";

import { User } from "../../Interfaces/User";
import { Form } from "./styles";


interface UsersDataFormProps {
  user: User;
}

export function UsersDataForm({ user }: UsersDataFormProps) {
  
  const { pathname } = useLocation();
  let isEditable = pathname.startsWith("/usuarios/edit");

  return (
    <Form>
      <div>
        <label>Nome:</label>
        <input type="text" readOnly={!isEditable} defaultValue={user.name} />
      </div>

      <div>
        <label>Username:</label>
        <input type="text" readOnly defaultValue={user.username} />
      </div>

      <div>
        <label>E-mail:</label>
        <input type="email" readOnly={!isEditable} defaultValue={user.email} />
      </div>

      <div>
        <label>Senha:</label>
        <input type="password" readOnly={!isEditable} defaultValue={user.password} />
      </div>

      <div>
        <label>Setor:</label>
        <input type="text" readOnly={!isEditable} defaultValue={user.department} />
      </div>

      <div>
        <label>Role:</label>
        <input type="text" readOnly={!isEditable} defaultValue={user.role} />
      </div>

      {isEditable && <button type="submit">Salvar</button>}
    </Form>
  )
}