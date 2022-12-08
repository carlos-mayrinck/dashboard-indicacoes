import { useLocation, useParams, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { User } from "../../Interfaces/User";
import { Form } from "./styles";
import { api } from "../../services/api";


interface UsersDataFormProps {
  user: User;
}

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  department: string;
  role: string;
}

export function UsersDataForm({ user }: UsersDataFormProps) {

  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string()
      .required("Este campo é obrigatório.")
      .min(3, "Nome precisa ter no mínimo 3 caracteres."),
    email: yup.string()
      .required("Este campo é obrigatório.")
      .email("Insira um endereço de email válido."),
    username: yup.string()
      .required("Este campo é obrigatório."),
    password: yup.string()
      .required("Este campo é obrigatório."),
    department: yup.string()
      .required("Este campo é obrigatório."),
    role: yup.string()
      .required("Este campo é obrigatório."),
  });

  const { handleSubmit, register, setValue, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  let isEditable = pathname.startsWith("/usuarios/editar");
  const allRoles = ["user", "admin"];
  const availableRoles = allRoles.filter(role => user.role !== role);

  const handleUserUpdating: SubmitHandler<FormData> = (data) => {
    const response = api.put(`users/${id}`, data);
    const toastDisplay = toast.promise(response, {
      pending: "Atualizando usuário.",
      success: "Usuário atualizado.",
      error: "Falha ao atualizar o usuário."
    });

    Promise.all([response, toastDisplay])
      .then(data => {
        if (data[0].status === 200) {
          navigate(`/usuarios/ver/${id}`);
        }
      });
  }

  useEffect(() => {
    setValue("name", user.name);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("password", user.password);
    setValue("department", user.department);
    setValue("role", user.role);
  }, [user]);

  return (
    <Form onSubmit={handleSubmit(handleUserUpdating)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          readOnly={!isEditable}
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          readOnly
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>E-mail:</label>
        <input
          type="email"
          readOnly={!isEditable}
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Senha:</label>
        <input
          type="password"
          readOnly={!isEditable}
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Setor:</label>
        <input
          type="text"
          readOnly={!isEditable}
          {...register("department")}
        />
        {errors.department && <p>{errors.department.message}</p>}
      </div>

      <div>
        <label>Role:</label>

        {
          isEditable ? (
            <>
              <select
                {...register("role", {
                  required: true
                })}>
                <option value={user.role}>{user.role}</option>
                {availableRoles.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </select>
              {errors.role && <p>{errors.role.message}</p>}
            </>
          ) : (
            <input
              type="text"
              readOnly
              {...register("role")}
            />
          )
        }
      </div>

      {isEditable && <button type="submit">Salvar</button>}
    </Form>
  )
}