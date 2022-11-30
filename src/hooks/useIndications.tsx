import { useParams } from "react-router-dom";
import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { Indication } from "../Interfaces/Indication";

interface IndicationsProviderProps {
  children: ReactNode;
}

interface IndicationsContextData {
  indications: Indication[];
  indication: Indication;
}

const IndicationsContext = createContext<IndicationsContextData>({} as IndicationsContextData);

export function IndicationsProvider({ children }: IndicationsProviderProps) {

  const [indications, setIndications] = useState<Indication[]>([]);
  const [indication, setIndication] = useState<Indication>({} as Indication);
  const params = useParams();

  useEffect(() => {

    api.get(`indications/`)
    .then(response => setIndication(response.data.indication));
  }, []);

  useEffect(() => {
    api.get("/indications")
      .then(response => setIndications(response.data.indications));
  }, []);

  return (
    <IndicationsContext.Provider value={{indications, indication}}>
      { children }
    </IndicationsContext.Provider>
  )
}

export function useIndications() {
  const context = useContext(IndicationsContext);
  return context;
}