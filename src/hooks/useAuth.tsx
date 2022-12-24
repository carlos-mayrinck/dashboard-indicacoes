import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
  loggedIn: boolean;
  signIn: (user: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    const user = localStorage.getItem("@indications:auth_user_data");

    return !!user;
  });

  function signIn(user: string, password: string) {
    const data = { user, password };

    api.post("/login", data)
    .then(res => {
      if (res.status === 201) {
        const { data } = res;

        localStorage.setItem("@indications:auth_user_data", JSON.stringify(data));
        setLoggedIn(true);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  function signOut() {
    if ( loggedIn ) {
      localStorage.removeItem("@indications:auth_user_data");
      setLoggedIn(false);
    }
  }

  return (
    <AuthContext.Provider value={{ loggedIn, signIn , signOut }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}