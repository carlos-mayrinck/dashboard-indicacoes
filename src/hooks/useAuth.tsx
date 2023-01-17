import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

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

    const response = api.post("/login", data);

    const toastDisplay = toast.promise(response, {
      pending: "Aguarde...",
      success: {
        render({ data }) {
          return `Olá, ${data?.data?.user?.name}!`
        }
      },
      error: "Login não autorizado."
    });

    Promise.all([response, toastDisplay]).then(res => {
      if (res[0].status === 201) {
        const { data } = res[0];

        localStorage.setItem("@indications:auth_user_data", JSON.stringify(data));
        setLoggedIn(true);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  function signOut() {
    if (loggedIn) {
      localStorage.removeItem("@indications:auth_user_data");
      setLoggedIn(false);
    }
  }

  return (
    <AuthContext.Provider value={{ loggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}