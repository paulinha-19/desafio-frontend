import React, { useState } from "react";
import styled from "styled-components";
import { CarouselCard } from "./CarouselCard";
import pigzMarketplace from "../../assets/pigz-marketplace.png";
import laptopCelular from "../../assets/laptop-celular.png";
import entregador from "../../assets/entregador.png";
import pagamentoOnline from "../../assets/pagamento-online.png";

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 382px;
  height: 400px;
`;

const CardIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  const cards = [
    {
      title: "Pigz Marketplace",
      subtitle:
        "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.",
      image: pigzMarketplace,
    },
    {
      title: "Pigz Gestão",
      subtitle:
        "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.",
      image: laptopCelular,
    },
    {
      title: "Gestão de entregadores",
      subtitle:
        "A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.",
      image: entregador,
    },
    {
      title: "Pagamento on-line",
      subtitle:
        "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.",
      image: pagamentoOnline
    },
  ];
  const handleCardChange = (index) => {
    setCurrentCard(index);
  };

  return (
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
  );
};
