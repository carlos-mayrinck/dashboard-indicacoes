import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { PageTitle } from "../../../components/PageTitle";
import { Indication } from "../../../Interfaces/Indication";
import { api } from "../../../services/api";

import { Container, ContentContainer } from "./styles";


export function VerIndicacao() {

  const [indication, setIndication] = useState<Indication>({} as Indication);
  const { id } = useParams();

  useEffect(() => {
    api.get(`indications/${id}`)
      .then(response => setIndication(response.data.indication));
  }, [id]);

  return (
    <Container>
      <PageTitle>Detalhes da indicação</PageTitle>
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
          </div>
          <div>
            <p><strong>Nível de interesse: </strong>{indication.interest}</p>
            <p><strong>Canal de indicação: </strong>{indication.channel}</p>
            <p><strong>Origem: </strong>{indication.source}</p>
            <p><strong>Data da indicação: </strong>{indication.createdAt && new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }).format(new Date(indication.createdAt))}</p>
          </div>
        </section>
        <section>
          <div>
            <h3>Indicado por:</h3>
            <p><strong>Nome: </strong>{indication.ambassador?.name}</p>
            <p><strong>Email: </strong>{indication.ambassador?.email}</p>
            <p><strong>Setor: </strong>{indication.ambassador?.department}</p>
          </div>
        </section>
      </ContentContainer>
    </Container>
  )
}