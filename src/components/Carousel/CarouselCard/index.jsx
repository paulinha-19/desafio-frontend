import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(224deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  border-radius: 64px;
  overflow: hidden;
`;
const CardContent = styled.div`
  padding: 40px;
  text-align: center;
`;
const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;
const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #fff;
`;

const CardImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
`;

export const CarouselCard = ({ title, subtitle, image }) => {
  return (
    <>
      <Title>{title}</Title>
      <CardWrapper>
        <CardContent>
          <Subtitle>{subtitle}</Subtitle>
        </CardContent>
        <CardImage src={image} alt="Card Image" />
      </CardWrapper>
    </>
  );
};
