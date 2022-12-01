import { useState, FormEvent } from "react";
import { useIndications } from "../../hooks/useIndications";
import { Indication } from "../../Interfaces/Indication";

import { api } from "../../services/api";

import { FormContainer } from "./styles";


export function FilterIndicationsForm() {

  const { setIndications } = useIndications();

  const [id, setId] = useState('');
  const [indicationName, setIndicationName] = useState('');
  const [source, setSource] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  function handleIndicationsFiltering(event: FormEvent) {
    event.preventDefault();

    api.get("/indications")
      .then(response => {
        const indications: Indication[] = response.data.indications;

        const filteredIndications = indications.filter(indication => {
          return (
            indication.id.toString().toLowerCase().indexOf(String(id).toLowerCase()) > -1
            && indication.name.toLowerCase().indexOf(String(indicationName).toLowerCase()) > -1
            && indication.source.toLowerCase().indexOf(String(source).toLowerCase()) > -1
            && (
              (new Date(indication.createdAt) >= new Date(String(initialDate)) && new Date(indication.createdAt) <= new Date(String(finalDate)))
              || (new Date(indication.createdAt) >= new Date(String(initialDate)) && finalDate === "")
              || (initialDate === "" && new Date(indication.createdAt) <= new Date(String(finalDate)))
              || (initialDate === "" && finalDate === "")
            )
          );
        });

        setIndications([...filteredIndications]);
      });
  }

  return (
    <FormContainer>
      <h2>Filtros</h2>
      <form>
        <div>

          <div>
            <label>
              ID da indicação
              <input type="text" value={id} onChange={e => { setId(e.target.value) }} />
            </label>
          </div>

          <div>
            <label>
              Nome do indicado
              <input type="text" value={indicationName} onChange={e => { setIndicationName(e.target.value) }} />
            </label>
          </div>

          <div>
            <label>
              Campanha
              <select value={source} onChange={e => { setSource(e.target.value) }}>
                <option value=""></option>
                <option value="Indicacao interna">Indicação interna</option>
                <option value="Indicacao externa">Indicação externa</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Data inicial
              <input type="date" value={initialDate} onChange={e => { setInitialDate(e.target.value) }} />
            </label>
          </div>

          <div>
            <label>
              Data final
              <input type="date" value={finalDate} onChange={e => { setFinalDate(e.target.value) }} />
            </label>
          </div>
        </div>
        <button type="submit" onClick={event => { handleIndicationsFiltering(event) }}>Filtrar</button>
      </form>
    </FormContainer>
  );
}