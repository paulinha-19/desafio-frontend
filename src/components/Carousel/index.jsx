import React, { useState } from "react";
import styled from "styled-components";
import { CarouselCard } from "./CarouselCard";
import { Informativo } from "../Informativo";
import { cards } from "../../data/cardCarousel";
import { CardContainer } from "../../styles/Card";

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
`;

const CardIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;
const Indicator = styled.div`
  width: 88px;
  height: 4px;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#FA641E" : "#EEEEEE")};
  margin: 0 5px;
  cursor: pointer;
`;

export const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const handleCardChange = (index) => {
    setCurrentCard(index);
  };

  return (
    <>
      <CarouselWrapper>
        <CardContainer>
          <CardIndicators>
            {cards.map((_, index) => (
              <Indicator
                key={index}
                active={index === currentCard}
                onClick={() => handleCardChange(index)}
              />
            ))}
          </CardIndicators>
          <CarouselCard
            title={cards[currentCard].title}
            subtitle={cards[currentCard].subtitle}
            image={cards[currentCard].image}
          />
        </CardContainer>
      </CarouselWrapper>
      <Informativo
        title="E mais: suporte que realmente funciona!"
        subtitle="Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes."
        marginTop="200px"
        marginBottom="20px"
      />
    </>
  );
};
