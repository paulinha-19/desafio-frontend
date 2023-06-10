import React from "react";
import styled from "styled-components";
import { CardButton } from "./CardButton";
import { contentCardButton } from "../../data/contentCardButton";
import { CardContainer } from "../../styles/Card";
import iconWhatsApp from "../../assets/icon-whatsapp.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 16px;
  margin-top: 40px;
`;

const FaleComAPigz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
`;

export const SectionCardButton = () => {
  return (
    <>
      <Wrapper>
        {contentCardButton.map((item, index) => (
          <CardContainer height="100%" style={{ marginBottom: "40px" }}>
            <CardButton
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              buttonPreco={item.buttonPreco}
              buttonSecondary={item.buttonSecondary}
            />
          </CardContainer>
        ))}
      </Wrapper>
      <FaleComAPigz>
        <p style={{ marginRight: "19px" }}>Fale com a Pigz</p>
        <img src={iconWhatsApp} alt="icon whatsapp" />
        <p style={{ marginLeft: "7px" }}>95 3224-2603</p>
      </FaleComAPigz>
    </>
  );
};
