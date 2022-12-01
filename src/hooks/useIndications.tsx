import { createContext, Dispatch, SetStateAction, ReactNode, useState, useEffect, useContext } from "react";
import { Indication } from "../Interfaces/Indication";
import { api } from "../services/api";

interface IndicationsContextData {
  indications: Indication[];
  setIndications: Dispatch<SetStateAction<Indication[]>>;
}

interface IndicationsProviderProps {
  children: ReactNode;
}

const IndicationsContext = createContext<IndicationsContextData>({} as IndicationsContextData);

export function IndicationsProvider({ children }: IndicationsProviderProps) {

  const [indications, setIndications] = useState<Indication[]>([]);

  useEffect(() => {
    api.get("/indications")
      .then(response => setIndications(response.data.indications));
  }, []);

  return (
    <IndicationsContext.Provider value={{ indications, setIndications }}>
      {children}
    </IndicationsContext.Provider>
  )
}

export function useIndications() {
  const context = useContext(IndicationsContext);
  return context;
}