import React from "react";
import styled from "styled-components";
import pigzGestaoLogo from "../../assets/pigz-gestao-logo.svg";
import { Button } from "../../styles/Button";
import { Container } from "@mui/material";
import { device } from "../../styles/Breakpoints";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.img`
  width: 80px;
  height: 40px;
  @media ${device.sm} {
    height: 32px;
    width: 64px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={pigzGestaoLogo} alt="Pigz Gestão Logo " />
        <Button
          background="linear-gradient(258deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent"
          color="#fff"
          padding="8px 24px"
          borderRadius="32px"
          boxShadow="0px 5px 10px #fa641ead"
          fontWeight="500"
          fontSize="14px"
        >
          Já sou parceiro
        </Button>
      </HeaderWrapper>
    </Container>
  );
};
