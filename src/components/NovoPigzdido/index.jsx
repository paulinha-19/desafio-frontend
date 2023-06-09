import React from "react";
import { Title, TextContainer } from "../../styles/Title";
import { CardPigzdido, Container } from "../index";
import storeFront from "../../assets/storefront.png";
import smartphone from "../../assets/smartphone.png";
import pigzGestao from "../../assets/pigz-gestao.png";
import print from "../../assets/print.png";

export const NovoPigzdido = () => {
  return (
    <Container>
      <TextContainer>
        <Title
          textColor="#000"
          fontWeight="700"
          style={{ fontSize: "32px", textAlign: "center", marginTop: "100px" }}
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
        }}
      >
        <CardPigzdido
          imageSrc={storeFront}
          title="Marketplace"
          subtitle="Pra sua loja vender mais"
        />
        <CardPigzdido
          imageSrc={smartphone}
          title="É fácil e rápido"
          subtitle="Fazer um pedido no Pigz"
        />
        <CardPigzdido
          imageSrc={pigzGestao}
          title="Pigz Gestão"
          subtitle="Você no controle, sempre"
        />
        <CardPigzdido
          imageSrc={print}
          title="Vias de impressão"
          subtitle="Personalizáveis"
        />
      </div>
    </Container>
  );
};
