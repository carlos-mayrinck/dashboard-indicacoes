import { Indication } from "../../Interfaces/Indication";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, FormContainer, Table } from "./styles";

export function Indicacoes() {

  const [indications, setIndications] = useState<Indication[]>([]);

  useEffect(() => {
    api.get("/indications")
      .then(response => setIndications(response.data.indications));
  }, []);

  return (
    <Container>
      <FormContainer>
        <h2>Filtros</h2>
        <form>
          <div>

            <div>
              <label>
                ID da indicação
                <input type="text" />
              </label>
            </div>

            <div>
              <label>
                Nome do indicado
                <input type="text" />
              </label>
            </div>

            <div>
              <label>
                Campanha
                <select>
                  <option value=""></option>
                  <option value="Indicacao interna">Indicação interna</option>
                  <option value="Indicacao externa">Indicação externa</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Data inicial
                <input type="date" />
              </label>
            </div>

            <div>
              <label>
                Data final
                <input type="date" />
              </label>
            </div>

            <div>
              <span>Origem</span>
              <label>
                <input type="checkbox" />
                <AiOutlineMail />
              </label>
              <label>
                <input type="checkbox" />
                <FaWhatsapp />
              </label>
            </div>
          </div>
          <button type="submit">Filtrar</button>
        </form>
      </FormContainer>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Indicado</th>
            <th>Quem indicou</th>
            <th>Origem</th>
            <th>Data</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {
            indications.map(indication => (

              <tr key={indication.id}>
                <td>
                  <p>{indication.id}</p>
                </td>
                <td className="indicacao">
                  <strong className="nome"><Link to={`view/${indication.id}`}>{indication.name}</Link></strong>
                  <span className="empresa">{indication.company}</span>
                  <span className="vertical">{indication.segment}</span>
                  <span className="telefone">{indication.phone}</span>
                  <span className="telefone">{indication.channel}</span>
                </td>
                <td>
                  <p>{indication.ambassador}</p>
                </td>
                <td>
                  <p>{indication.source}</p>
                </td>
                <td>
                  <p>{indication.createdAt}</p>
                </td>
                <td>
                  <Link to={`view/${indication.id}`}>Ver mais</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}