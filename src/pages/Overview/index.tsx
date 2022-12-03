import { useState, useEffect } from "react";
import { useIndications } from "../../hooks/useIndications";

import Chart from "react-apexcharts";
import { Container, ContentContainer } from "./styles";
import { PageTitle } from "../../components/PageTitle";

export function Overview() {

  const { indications } = useIndications();
  const [channelData, setChannelData] = useState([0, 0]);
  

  useEffect(() => {

    const indicationsPerChannel = indications.reduce((acc, indication) => {
      if (indication.channel === "whatsapp") {
        acc.whatsapp += 1;
      } else if (indication.channel === "email") {
        acc.email += 1;
      }

      return acc;
    }, {
      whatsapp: 0,
      email: 0
    });

    console.log(indications);

    setChannelData([
      indicationsPerChannel.whatsapp,
      indicationsPerChannel.email
    ]);
  }, [indications]);


  return (
    <Container>
      <PageTitle>Overview</PageTitle>

      <ContentContainer>
        <section>
          <h3>Análise por canais</h3>

          <Chart
            type="donut"
            width={500}
            options={{
              labels: ["Whatsapp", "E-mail"],
              chart: {
                foreColor: "#EEEEF2",
                fontFamily: "Poppins, sans-serif"
              },
              dataLabels: {
                style: {
                  fontSize: "0.9rem"
                }
              }
            }}
            series={channelData}
          />
        </section>
        <section>
          <h3>Análise por canais</h3>

          <Chart
            options={{
              labels: ["Whatsapp", "E-mail"],
              chart: {
                foreColor: "#EEEEF2",
                fontFamily: "Poppins, sans-serif",
              },
              dataLabels: {
                style: {
                  fontSize: "0.9rem"
                }
              }
            }}
            series={channelData}
            type="donut"
            width={500}
          />
        </section>
      </ContentContainer>
    </Container>
  )
}