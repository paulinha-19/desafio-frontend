import React from "react";
import styled from "styled-components";
import { Title, CardContent, Subtitle } from "../../../styles/Card";

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(224deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  border-radius: 64px;
  overflow: hidden;
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
          <Subtitle textColor="#fff" style={{ margin: "0" }}>
            {subtitle}
          </Subtitle>
        </CardContent>
        <CardImage src={image} alt="Card Image" />
      </CardWrapper>
    </>
  );
};
