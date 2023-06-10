import React from "react";
import { Title, TextContainer } from "../../styles/Text";
import { CardPigzdido, Container } from "../index";
import { Informativo } from "../Informativo";
import { cardButton } from "../../data/cardButton.";

export const NovoPigzdido = () => {
  return (
    <Container>
      <TextContainer>
        <Title
          textColor="#000"
          fontWeight="700"
          style={{
            fontSize: "32px",
            textAlign: "center",
            marginTop: "100px",
            padding: "0 40px",
          }}
        >
          Você tem um novo Pigzdido!
        </Title>
      </TextContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 32,
          padding: "0 30px",
        }}
      >
        {cardButton.map((item, index) => (
          <CardPigzdido
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
      <Informativo
        title="Tudo que você precisa por apenas R$199/mês"
        subtitle="Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas."
        marginTop="80px"
        marginBottom="20px"
      />
    </Container>
  );
};
