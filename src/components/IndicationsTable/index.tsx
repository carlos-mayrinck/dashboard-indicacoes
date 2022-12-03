import { Link } from "react-router-dom";
import { useIndications } from "../../hooks/useIndications";
import { Table } from "./styles";


export function IndicationsTable() {

  const { indications } = useIndications();

  return (
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
                <strong className="nome"><Link to={`ver/${indication.id}`}>{indication.name}</Link></strong>
                <span className="empresa">{indication.company}</span>
                <span className="vertical">{indication.segment}</span>
                <span className="telefone">{indication.phone}</span>
                <span className="telefone">{indication.channel}</span>
              </td>
              <td>
                <strong>{indication.ambassador.name}</strong>
                <span>{indication.ambassador.email}</span>
                <span>{indication.ambassador.department}</span>
              </td>
              <td>
                <p>{indication.source}</p>
              </td>
              <td>
                <p>{new Intl.DateTimeFormat("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }).format(new Date(indication.createdAt))}</p>
              </td>
              <td>
                <Link to={`ver/${indication.id}`}>Ver mais</Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}