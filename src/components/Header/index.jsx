import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pigzGestaoLogo from "../../assets/pigz-gestao-logo.svg";
import { Container } from "../Container";

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

const Button = styled(Link)`
  background: linear-gradient(254deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 32px;
  text-decoration: none;
  box-shadow: 0px 5px 10px #fa641ead;
  font-weight: 500;
  font-size: 14px;
`;

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo src={pigzGestaoLogo} alt="Pigz Gestão Logo " />
        <Button to="https://www.google.com.br" target="_blank">
          Já sou parceiro
        </Button>
      </HeaderContainer>
    </Container>
  );
};
