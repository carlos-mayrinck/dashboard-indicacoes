import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export function CreateNewUserForm() {

  const schema = yup.object({
    name: yup.string()
      .required("Este campo é obrigatório.")
      .min(3, "O nome precisa ter no mínimo 3 caracteres."),
    username: yup.string()
      .required("Este campo é obrigatório.")
      .min(5, "Username precisa ter no mínimo 5 caracteres."),
    email: yup.string()
      .required("Este campo é obrigatório.")
      .email("Insira um e-mail válido."),
    password: yup.string()
      .required("Este campo é obrigatório")
      .min(8, "A senha precisa ter no mínimo 8 caracteres."),
    role: yup.string()
      .required("Este campo é obrigatório."),
  });

  const { handleSubmit, register, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const handleUserCreation: SubmitHandler<FormData> = (data) => {

    const response = api.post("users", data);
    const toastDisplay = toast.promise(response, {
      pending: "Criando novo usuário.",
      success: "Usuário criado com sucesso.",
      error: "Falha ao criar usuário"
    });

    Promise.all([response, toastDisplay])
      .then(data => {
        if (data[0].status === 201) {
          navigate("/usuarios");
        }
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleUserCreation)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Role:</label>
        <select {...register("role")}>
          <option value="">Selecione um item na lista</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p>{errors.role.message}</p>}
      </div>

      <button type="submit">Criar</button>
    </Form>
  )
}