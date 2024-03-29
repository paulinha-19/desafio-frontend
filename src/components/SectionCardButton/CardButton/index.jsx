import React from "react";
import styled from "styled-components";
import { Title, CardContent, Subtitle } from "../../../styles/Card";
import { Button } from "../../../styles/Button";

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 64px;
  overflow: hidden;
`;
const Content = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: 400;
`;

const ButtonPreco = styled(Button)`
  margin-bottom: 25px;
  @media (max-width: 380px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResponsiveButton = styled(Button)`
  @media (max-width: 380px) {
    font-size: 14px;
    padding: 10px 0px;
  }
`;

export const CardButton = ({
  title,
  subtitle,
  content,
  buttonPreco,
  buttonSecondary,
}) => {
  const separateContent = content ? content.split(". ") : [];

  return (
    <CardWrapper>
      <CardContent textAlign="start">
        <Title fontWeight="700" textAlign="start" style={{ margin: "0" }}>
          {title}
        </Title>
        <Subtitle fontWeight="500" fontSize="16px" style={{ margin: 0 }}>
          {subtitle}
        </Subtitle>
        <div style={{ margin: "20px 0 40px 0" }}>
          {separateContent.map((text, index) => (
            <Content key={index} style={{ margin: 0, paddingBottom: "10px" }}>
              {text}
            </Content>
          ))}
        </div>
        <ButtonPreco
          fontSize="20px"
          padding="14px 24px"
          background="#fff"
          color="#333"
          borderRadius="32px"
          fontWeight="700"
        >
          {buttonPreco}
        </ButtonPreco>
        <ButtonContainer>
          <ResponsiveButton
            fontSize="16px"
            padding="17px 40px"
            background="linear-gradient(259deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent"
            color="#fff"
            borderRadius="32px"
            fontWeight="500"
            boxShadow="0px 5px 10px #fa641ead"
          >
            {buttonSecondary}
          </ResponsiveButton>
        </ButtonContainer>
      </CardContent>
    </CardWrapper>
  );
};
