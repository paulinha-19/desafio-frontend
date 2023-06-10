import React, { useState } from "react";
import styled from "styled-components";
import burguer2 from "../../assets/burguer_2.png";
import pigzPigz from "../../assets/pigz-pigz.png";
import { device } from "../../styles/Breakpoints";
import { Container } from "../Container";
import { Title, TextContainer, Subtitle } from "../../styles/Text";

const MainContainer = styled.div`
  position: relative;
  background: linear-gradient(117deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  display: flex;
  align-items: center;
  padding: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  @media ${device.sm} {
    align-items: center;
    background-color: aqua;
  }
`;

const Image = styled.img`
  width: 100%;
  @media ${device.xs} {
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  ::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 80%;
    top: 0;
    right: 0;
    padding-bottom: 100%;
    background-image: url(${burguer2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%);

    @media ${device.lg} {
      height: 100%;
      width: 100%;
    }

    @media ${device.md} {
      padding-bottom: 80%;
      height: 80%;
      width: 80%;
    }

    @media ${device.sm} {
      padding-bottom: 100%;
      height: 100%;
      width: 100%;
      top: -30px;
    }

    @media ${device.xs} {
      padding-bottom: 100%;
      height: 100%;
      width: 100%;
      left: 0px;
      right: 0;
    }
  }
`;

const FormContainer = styled.form`
  position: relative;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 40px auto 90px auto;
  max-width: 500px;
  border-radius: 32px;
  border: 1px solid #cccccc;
  padding: 0 24px 40px 24px;
`;

const FormTitle = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: #333333;
`;

const FormSubtitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #333333;
`;

const FormLabel = styled.label`
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  margin-top: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

const FormInput = styled.input`
  display: flex;
  height: 48px;
  border-radius: 16px;
  border: 1px solid #999999;
  padding-left: 16px;
  color: #333333;
  font-size: 14px;
  ::placeholder {
    color: #cccccc;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Select = styled.select`
  background: #ffffff;
  height: 48px;
  border-radius: 16px;
  border: 1px solid #999999;
  padding-left: 16px;
  color: #333333;
  font-size: 14px;
  width: 100%;
`;

const FormButton = styled.button`
  background-color: #fa641e;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  border-radius: 16px;
  height: 48px;
  border: transparent;
  margin-top: 24px;
`;

const AbsoluteImage = styled.div`
  position: absolute;
  transform: translateX(-50%);
  bottom: -80px;
  left: 50%;
`;

export const FormSection = () => {
  const [formStep, setFormStep] = useState(1);
  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };
  const handleFinish = () => {
    const dadosValidos = true;
    if (dadosValidos) {
      setFormStep(1);
    } else {
    }
  };

  return (
    <MainContainer>
      <Container>
        <ContentContainer>
          <TextContainer>
            <Title
              textColor="#fff"
              fontWeight="700"
              style={{ fontSize: "40px" }}
            >
              Pigz: tudo que você precisa pra vender ainda mais!
            </Title>
            <Subtitle
              textColor="#fff"
              fontWeight="400"
              style={{ fontSize: "16px" }}
            >
              Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
              Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </Subtitle>
          </TextContainer>
          <ImageContainer />
          {/* <Image src={burguer2} alt="Burguer" /> */}
        </ContentContainer>
        <FormContainer>
          {formStep === 1 && (
            <>
              <FormTitle>Quero vender no Pigz</FormTitle>
              <FormSubtitle>
                Dê o primeiro passo para aumentar suas vendas
              </FormSubtitle>
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <FormInput type="text" placeholder="Nome" id="nome" name="nome" />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="text"
                placeholder="Email"
                id="email"
                name="email"
              />
              <FormLabel htmlFor="telefone">Telefone</FormLabel>
              <FormInput
                type="text"
                placeholder="Telefone"
                id="telefone"
                name="telefone"
              />
              <p
                style={{
                  textAlign: "left",
                  color: "#666666",
                  fontSize: "13px",
                  marginTop: "20px",
                }}
              >
                Ao continuar, aceito que a Pigz entre em contato comigo por
                telefone, e-mail ou WhatsApp.
              </p>
              <FormButton onClick={handleNextStep}>Continuar</FormButton>
            </>
          )}
          {formStep === 2 && (
            <>
              <FormTitle>Onde fica a sua loja?</FormTitle>
              <FormLabel htmlFor="cep">CEP</FormLabel>
              <FormInput
                type="text"
                placeholder="00000-00"
                id="cep"
                name="cep"
              />

              <SelectContainer>
                <div style={{ flex: 1 }}>
                  <FormLabel htmlFor="estado">Estado</FormLabel>
                  <Select
                    placeholder="Selecione"
                    id="estado"
                    name="estado"
                    required
                    value=""
                  >
                    <option value="" disabled>
                      UF
                    </option>
                    <option value="SP">SP</option>
                    <option value="RR">RR</option>
                  </Select>
                </div>
                <div style={{ flex: 2, marginLeft: "12px" }}>
                  <FormLabel htmlFor="cidade">Cidade</FormLabel>
                  <Select
                    placeholder="Cidade"
                    id="cidade"
                    name="cidade"
                    required
                    value=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Boa Vista">Boa Vista</option>
                  </Select>
                </div>
              </SelectContainer>
              <FormLabel htmlFor="endereco">Endereço</FormLabel>
              <FormInput
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Avenida Brasil"
              />

              <InputContainer>
                <div style={{ flex: 1 }}>
                  <FormLabel htmlFor="numero">Número</FormLabel>
                  <FormInput
                    type="number"
                    placeholder="123"
                    id="numero"
                    name="numero"
                  />
                </div>
                <div style={{ flex: 2, marginLeft: "12px" }}>
                  <FormLabel htmlFor="complemento">Complemento</FormLabel>
                  <div style={{ display: "flex", flex: 1 }}>
                    <FormInput
                      type="text"
                      id="complemento"
                      name="complemento"
                      placeholder="Sala 1"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </InputContainer>

              <FormButton onClick={handleNextStep}>Próximo</FormButton>
            </>
          )}
          {formStep === 3 && (
            <>
              <FormTitle>Me conta um pouco sobre a sua loja</FormTitle>
              <FormLabel htmlFor="nome-da-loja">Nome da loja</FormLabel>
              <FormInput
                type="text"
                id="nome-da-loja"
                name="nome-da-loja"
                placeholder="Restaurante Todo Mundo Gosta"
              />
              <FormLabel htmlFor="cnpj-da-loja">CNPJ da loja</FormLabel>
              <FormInput type="text" placeholder="12.345.678/0001-99" />
              <SelectContainer>
                <div style={{ flex: 1 }}>
                  <FormLabel htmlFor="tipo-de-loja">Tipo de loja</FormLabel>
                  <Select
                    placeholder="Selecione"
                    id="tipo-de-loja"
                    name="tipo-de-loja"
                    required
                    value=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="loja-a">Loja A</option>
                    <option value="loja-b">Loja B</option>
                  </Select>
                </div>
              </SelectContainer>
              <FormButton onClick={handleFinish}>Concluir</FormButton>
            </>
          )}
        </FormContainer>
        <AbsoluteImage>
          <img src={pigzPigz} alt="Pigz-Pigz" />
        </AbsoluteImage>
      </Container>
    </MainContainer>
  );
};
