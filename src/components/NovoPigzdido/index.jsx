import React from "react";
import { Title, TextContainer } from "../../styles/Title";
import { Card } from "../Card";
import storeFront from "../../assets/storefront.png";
import smartphone from "../../assets/smartphone.png";
import pigzGestao from "../../assets/pigz-gestao.png";
import print from "../../assets/print.png";

export const NovoPigzdido = () => {
  return (
    <>
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
        <Card
          imageSrc={storeFront}
          title="Marketplace"
          subtitle="Pra sua loja vender mais"
        />
        <Card
          imageSrc={smartphone}
          title="É fácil e rápido"
          subtitle="Fazer um pedido no Pigz"
        />
        <Card
          imageSrc={pigzGestao}
          title="Pigz Gestão"
          subtitle="Você no controle, sempre"
        />
        <Card
          imageSrc={print}
          title="Vias de impressão"
          subtitle="Personalizáveis"
        />
      </div>
    </>
  );
};
