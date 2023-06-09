import React from "react";
import { TitleResponsive, SubtitleResponsive } from "../../styles/Title";
import styled from "styled-components";
import { Container } from "../index";

const ContainerTudoQueVocePrecisa = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TudoQueVocePrecisa = () => {
  return (
    <Container>
      <ContainerTudoQueVocePrecisa>
        <TitleResponsive fontWeight="700" style={{ fontSize: "32px" }}>
          Tudo que você precisa por apenas R$199/mês
        </TitleResponsive>
        <SubtitleResponsive fontWeight="400" style={{ fontSize: "16px" }}>
          Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
          por cada venda, sem letrinhas miúdas.
        </SubtitleResponsive>
      </ContainerTudoQueVocePrecisa>
    </Container>
  );
};
