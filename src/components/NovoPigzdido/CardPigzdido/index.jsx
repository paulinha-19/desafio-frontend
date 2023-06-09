import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
  border-radius: 64px;
  padding: 35px;
  transition: border 0.3s ease-out;

  &:hover {
    border: 2px solid #cccccc;
  }
`;

const CardImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin: 0 auto;
`;

const TextCard = styled.p`
  color: #333333;
  width: 100%;
  text-align: center;
`;

const CardTitle = styled(TextCard)`
  font-size: 20px;
  font-weight: 600;
`;

const CardSubtitle = styled(TextCard)`
  font-size: 16px;
  font-weight: 400;
`;

export const CardPigzdido = ({ imageSrc, title, subtitle }) => {
  return (
    <CardWrapper>
      <CardImage src={imageSrc} alt="Card Image" />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardWrapper>
  );
};
