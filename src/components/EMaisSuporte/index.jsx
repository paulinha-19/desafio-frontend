import React from "react";
import styled from "styled-components";
import { TitleResponsive, SubtitleResponsive } from "../../styles/Title";

const ContainerEMaisSuporte = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const EMaisSuporte = () => {
  return (
    <ContainerEMaisSuporte>
      <TitleResponsive
        fontWeight="700"
        style={{ fontSize: "32px", marginTop: "150px" }}
      >
        E mais: suporte que realmente funciona!
      </TitleResponsive>
      <SubtitleResponsive
        fontWeight="400"
        style={{ fontSize: "16px" }}
      >
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
        disponível pra ajudar você e seus clientes.
      </SubtitleResponsive>
    </ContainerEMaisSuporte>
  );
};
