import React from "react";
import { TitleResponsive, SubtitleResponsive } from "../../styles/Title";
import styled from "styled-components";
import { Container } from "../index";

const ContainerInformativo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Informativo = ({ title, subtitle, marginTop, marginBottom }) => {
  return (
    <Container>
      <ContainerInformativo>
        <TitleResponsive
          fontWeight="700"
          style={{
            fontSize: "32px",
            marginTop: marginTop || 0,
            marginBottom: marginBottom || 0,
          }}
        >
          {title}
        </TitleResponsive>
        <SubtitleResponsive fontWeight="400" style={{ fontSize: "16px" }}>
          {subtitle}
        </SubtitleResponsive>
      </ContainerInformativo>
    </Container>
  );
};
