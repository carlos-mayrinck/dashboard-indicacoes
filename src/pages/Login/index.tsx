import { Container, LoginForm } from "./styles";


export function Login() {
  return (
    <Container>
      <LoginForm>
        <strong>Login</strong>
        
        <input type="text" placeholder="Nome" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </LoginForm>
    </Container>
  )
}