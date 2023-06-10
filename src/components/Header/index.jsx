import React from "react";
import styled from "styled-components";
import pigzGestaoLogo from "../../assets/pigz-gestao-logo.svg";
import { Container } from "../Container";
import { Button } from "../../styles/Button";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const Logo = styled.img`
  height: 32px;
  width: 63px;
`;

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo src={pigzGestaoLogo} alt="Pigz Gestão Logo " />
        <Button to="https://www.google.com.br" target="_blank" width="110px">
          Já sou parceiro
        </Button>
      </HeaderContainer>
    </Container>
  );
};
