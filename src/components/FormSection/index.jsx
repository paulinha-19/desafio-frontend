import React, { useState } from "react";
import styled from "styled-components";
import burguer2 from "../../assets/burguer_2.png";
import pigzPigz from "../../assets/pigz-pigz.png";
import brasil from "../../assets/flags/brazil.png";
import usa from "../../assets/flags/usa.png";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const MainWrapper = styled.div`
  position: relative;
  background: linear-gradient(158deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  display: flex;
  align-items: center;
`;

const Title = styled(Typography)`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  @media (max-width: 460px) {
    font-size: 30px;
  }
  @media (max-width: 360px) {
    font-size: 25px;
  }
`;

const SubTitle = styled(Typography)`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 460px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 80%;
  left: 0;
  @media (max-width: 550px) {
    top: 10px;
  }
  @media (max-width: 460px) {
    width: 70%;
    top: 0;
  }

  @media (max-width: 360px) {
    width: 70%;
    top: 15px;
  }
`;

const Form = styled.form`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px auto 90px auto;
  max-width: 500px;
  border-radius: 32px;
  border: 1px solid #cccccc;
  padding: 10px 24px 40px 24px;
  @media (max-width: 600px) {
    margin: 100px auto 90px auto;
  }
  @media (max-width: 460px) {
    margin: 50px auto 90px auto;
  }
  @media (max-width: 360px) {
    margin: 20px auto 90px auto;
  }
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

const Label = styled.label`
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  margin-top: 15px;
  display: block;
`;

const Input = styled.input`
  width: 96%;
  height: 48px;
  border-radius: 16px;
  border: 1px solid #999999;
  padding-left: 16px;
  color: #333333;
  font-size: 14px;
  ::placeholder {
    color: #cccccc;
  }
  @media (max-width: 460px) {
    width: 93%;
  }
`;

const Select = styled.select`
  background: #ffffff;
  height: 48px;
  border-radius: 16px;
  padding-left: 16px;
  color: 333333;
  font-size: 14px;
  width: 100% !important;
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

const Icon = styled.i`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
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
  const countryCodes = [
    { code: "+55", flag: brasil },
    { code: "+1", flag: usa },
  ];

  const handleCountryCodeChange = (event) => {
    // Handle country code selection here
  };

  return (
    <MainWrapper className="MAINWRAPPER">
      <Container>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "32px",
          }}
        >
          <TextContainer>
            <Title variant="p" component="p">
              Pigz: tudo que você precisa pra vender ainda mais!
            </Title>
            <SubTitle variant="p" component="p">
              Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
              Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </SubTitle>
          </TextContainer>
          <Box sx={{ width: "144px" }}>
            <img src={burguer2} alt="Burguer" />
          </Box>
        </Box>
        <Form>
          {formStep === 1 && (
            <>
              <FormTitle>Quero vender no Pigz</FormTitle>
              <FormSubtitle>
                Dê o primeiro passo para aumentar suas vendas
              </FormSubtitle>
              <Label htmlFor="nome">Nome</Label>
              <Input type="text" placeholder="Nome" id="nome" name="nome" />
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Email" id="email" name="email" />
              <Label htmlFor="telefone">Telefone</Label>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px",
                  }}
                >
                  <Select
                    placeholder="Selecione"
                    id="telefone"
                    name="telefone"
                    required
                    defaultValue=""
                    style={{
                      backgroundColor: "#F0F0F0",
                      border: "transparent",
                    }}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Input
                  type="tel"
                  placeholder="(95) 99876-5432"
                  id="telefone"
                  name="telefone"
                />
              </Box>
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    type="text"
                    placeholder="00000-00"
                    id="cep"
                    name="cep"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="estado">Estado</Label>
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
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="cidade">Cidade</Label>
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
                </Grid>
                <Grid item xs={12}>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Avenida Brasil"
                  />
                </Grid>
                <Grid item xs={6} pr={2}>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    type="number"
                    placeholder="123"
                    id="numero"
                    name="numero"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Sala 1"
                  />
                </Grid>
              </Grid>
              <FormButton onClick={handleNextStep}>Próximo</FormButton>
            </>
          )}
          {formStep === 3 && (
            <>
              <FormTitle>Me conta um pouco sobre a sua loja</FormTitle>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Label htmlFor="nome-da-loja">Nome da loja</Label>
                  <Input
                    type="text"
                    id="nome-da-loja"
                    name="nome-da-loja"
                    placeholder="Restaurante Todo Mundo Gosta"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Label htmlFor="cnpj-da-loja">CNPJ da loja</Label>
                  <Input
                    type="text"
                    placeholder="12.345.678/0001-99"
                    name="cnpj-da-loja"
                    id="cnpj-da-loja"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Label htmlFor="tipo-de-loja">Tipo de loja</Label>
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
                </Grid>
              </Grid>
              <FormButton onClick={handleFinish}>Concluir</FormButton>
            </>
          )}
        </Form>
        <AbsoluteImage>
          <img src={pigzPigz} alt="Pigz-Pigz" />
        </AbsoluteImage>
      </Container>
    </MainWrapper>
  );
};
