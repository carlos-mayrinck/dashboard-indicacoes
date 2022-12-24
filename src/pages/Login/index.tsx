import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface FormData {
  user: string;
  password: string;
}

export function Login() {

  const schema = yup.object({
    user: yup.string()
      .required("Este campo é obrigatório."),
    password: yup.string()
      .required("Este campo é obrigatório.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const { signIn } = useAuth();

  const handleLogin: SubmitHandler<FormData> = (data) => {
    signIn(data.user, data.password);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>

        <div>
          <label>Usuário</label>
          <input
            type="text"
            {...register("user")}
          />

          { errors.user && <p>{errors.user.message}</p> }
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password")}
          />

          { errors.password && <p>{errors.password.message}</p> }
        </div>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}