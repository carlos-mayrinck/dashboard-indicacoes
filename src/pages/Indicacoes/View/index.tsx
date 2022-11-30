import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Indication } from "../../../Interfaces/Indication";
import { api } from "../../../services/api";

import { Container, ContentContainer } from "./styles";


export function View() {

  const [indication, setIndication] = useState<Indication>({} as Indication);
  const params = useParams();

  useEffect(() => {
    api.get(`indications/${params.id}`)
      .then(response => setIndication(response.data.indication));
  }, []);

  return (
    <Container>
      <Link to="/indicacoes">Voltar</Link>

      <ContentContainer>
        <h2>{indication.name}</h2>
        <p><strong>ID: </strong>{indication.id}</p>

        <section>
          <div>
            <p><strong>Empresa: </strong>{indication.company}</p>
            <p><strong>Telefone: </strong>{indication.phone}</p>
            <p><strong>Segmento: </strong>{indication.segment}</p>
            <p><strong>Produto indicado: </strong>{indication.product}</p>
            <p><strong>Produto indicado: </strong>{indication.product}</p>
          </div>
          <div>
            <p><strong>Nível de interesse: </strong>{indication.interest}</p>
            <p><strong>Canal de indicação: </strong>{indication.channel}</p>
            <p><strong>Origem: </strong>{indication.source}</p>
            <p><strong>Data da indicação: </strong>{indication.createdAt}</p>
          </div>
        </section>
      </ContentContainer>
    </Container>
  )
}