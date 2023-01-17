import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";

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
  const { loggedIn, signOut } = useAuth();

  useEffect(() => {
    if( loggedIn ) {
      const user = JSON.parse(localStorage.getItem("@indications:auth_user_data") ?? "");
      setUserData(user);
    }
  }, [loggedIn]);

  return (
    <Container>
      <nav>

        <span>{ userData.user?.name }</span>
        <button type="button" onClick={signOut}><CiLogout /> <span>Sair</span></button>
      </nav>
    </Container>
  )
}