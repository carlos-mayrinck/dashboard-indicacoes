import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

interface UserData {
  token: string;
  user: {
    id: string;
    username: string;
    name: string;
    email: string;
    role: string;
  }
}

export function Header() {

  const [userData, setUserData] = useState<UserData>({} as UserData);
  const { loggedIn } = useAuth();

  useEffect(() => {
    if( loggedIn ) {
      const user = JSON.parse(localStorage.getItem("@indications:auth_user_data") ?? "");
      setUserData(user);
    }
  }, []);

  return (
    <Container>
      <nav>

        <span>{ userData.user?.name }</span>
      </nav>
    </Container>
  )
}