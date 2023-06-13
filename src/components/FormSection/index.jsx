import React, { useState } from "react";
import styled from "styled-components";
import burguer2 from "../../assets/burguer_2.png";
import pigzPigz from "../../assets/pigz-pigz.png";
import sucess from "../../assets/check.png";
import { countryCodes } from "../../data/countryCodes";
import { formStepSchema } from "../../validation/index";
import { Container, Box, Typography, Grid } from "@mui/material";
import { FormStep1 } from "./Steps";

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
  &:focus {
    outline: none;
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
  &:focus {
    outline: none;
  }
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

const initialValues = {
  nome: "",
  email: "",
  telefone: "",
  cep: "",
  estado: "",
  cidade: "",
  endereco: "",
  numero: "",
  complemento: "",
  nomeDaLoja: "",
  cnpj: "",
  tipoDeLoja: "",
};

export const FormSection = () => {
  const [formStep, setFormStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0]
  );
  const handleNextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };
  const handleCountryCodeChange = (event) => {
    const countryCode = event.target.value;
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    setSelectedCountryCode(selectedCountry);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleFinish = () => {
    setFormStep(1);
  };
  return (
    <MainWrapper>
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
        <Form onSubmit={handleSubmit}>
          {formStep === 1 && (
            <>
              <FormStep1
                handleNextStep={handleNextStep}
                handleChange={handleChange}
                formValues={formValues}
                formErrors={formErrors}
              />
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
                    value={formValues.cep}
                    onChange={handleChange}
                  />
                  {formErrors.cep && <p>{formErrors.cep}</p>}
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="estado">Estado</Label>
                  <Select
                    placeholder="Selecione"
                    id="estado"
                    name="estado"
                    required
                    onChange={handleChange}
                    value={formValues.estado}
                  >
                    <option value="" disabled>
                      UF
                    </option>
                    <option value="SP">SP</option>
                    <option value="RR">RR</option>
                  </Select>
                  {formErrors.estado && <p>{formErrors.estado}</p>}
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Select
                    placeholder="Cidade"
                    id="cidade"
                    name="cidade"
                    required
                    value={formValues.cidade}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Boa Vista">Boa Vista</option>
                  </Select>
                  {formErrors.cidade && <p>{formErrors.cidade}</p>}
                </Grid>
                <Grid item xs={12}>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Avenida Brasil"
                    value={formValues.endereco}
                    onChange={handleChange}
                  />
                  {formErrors.endereco && <p>{formErrors.endereco}</p>}
                </Grid>
                <Grid item xs={6} pr={2}>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    type="number"
                    placeholder="123"
                    id="numero"
                    name="numero"
                    value={formValues.numero}
                    onChange={handleChange}
                  />
                  {formErrors.numero && <p>{formErrors.numero}</p>}
                </Grid>
                <Grid item xs={6}>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Sala 1"
                    value={formValues.complemento}
                    onChange={handleChange}
                  />
                  {formErrors.complemento && <p>{formErrors.complemento}</p>}
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
                  <Label htmlFor="nomeDaLoja">Nome da loja</Label>
                  <Input
                    type="text"
                    id="nomeDaLoja"
                    name="nomeDaLoja"
                    placeholder="Restaurante Todo Mundo Gosta"
                    value={formValues.nomeDaLoja}
                    onChange={handleChange}
                  />
                  {formErrors.nomeDaLoja && <p>{formErrors.nomeDaLoja}</p>}
                </Grid>
                <Grid item xs={12}>
                  <Label htmlFor="cnpj">CNPJ da loja</Label>
                  <Input
                    type="text"
                    placeholder="12.345.678/0001-99"
                    name="cnpj"
                    id="cnpj"
                    value={formValues.cnpj}
                    onChange={handleChange}
                  />
                  {formErrors.cnpj && <p>{formErrors.cnpj}</p>}
                </Grid>
                <Grid item xs={12}>
                  <Label htmlFor="tipoDeLoja">Tipo de loja</Label>
                  <Select
                    placeholder="Selecione"
                    id="tipoDeLoja"
                    name="tipoDeLoja"
                    required
                    value={formValues.tipoDeLoja}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="loja-a">Loja A</option>
                    <option value="loja-b">Loja B</option>
                  </Select>
                  {formErrors.tipoDeLoja && <p>{formErrors.tipoDeLoja}</p>}
                </Grid>
              </Grid>
              <FormButton type="submit" onClick={handleNextStep}>
                Concluir
              </FormButton>
            </>
          )}
          {formStep === 4 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={sucess}
                  alt="Sucesos ao submter os dados do formulário"
                  width="100px"
                  height="100px"
                />
                <Typography variant="p" component="p" sx={{ fontSize: "20px" }}>
                  Dados enviados
                </Typography>
                <SubTitle>Em breve entraremos em contato!</SubTitle>
              </Box>
              <FormButton onClick={handleFinish}>Finalizar</FormButton>
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
