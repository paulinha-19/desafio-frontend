import React from "react";
import { Title, Subtitle } from "../../styles/Title";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

const ContainerTudoQueVocePrecisa = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TitleResponsive = styled(Title)`
  margin: 0 auto;
  @media ${device.sm} {
    max-width: 334px;
  }
`;

const SubtitleResponsive = styled(Subtitle)`
  max-width: 600px;
  margin: 0 auto;
  @media ${device.sm} {
    max-width: 286px;
  }
`;

export const TudoQueVocePrecisa = () => {
  return (
    <ContainerTudoQueVocePrecisa>
      <TitleResponsive
        fontWeight="700"
        textColor="#333333"
        style={{ fontSize: "32px", marginTop: "80px" }}
      >
        Tudo que você precisa por apenas R$199/mês
      </TitleResponsive>
      <SubtitleResponsive
        fontWeight="400"
        textColor="#333333"
        style={{ fontSize: "16px", marginTop: "20px" }}
      >
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </SubtitleResponsive>
    </ContainerTudoQueVocePrecisa>
  );
};
