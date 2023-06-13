import React, { useState } from "react";
import styled from "styled-components";
import burguer2 from "../../../assets/burguer_2.png";
import pigzPigz from "../../../assets/pigz-pigz.png";
import sucess from "../../../assets/check.png";
import { countryCodes } from "../../../data/countryCodes";
import { formStepSchema } from "../../../validation/index";
import { Container, Box, Typography, Grid } from "@mui/material";

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

export const FormStep1 = ({
  handleNextStep,
  handleChange,
  formValues,
  formErrors,
}) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0]
  );
  const handleCountryCodeChange = (event) => {
    const countryCode = event.target.value;
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    setSelectedCountryCode(selectedCountry);
  };
  return (
    <>
      <FormTitle>Quero vender no Pigz</FormTitle>
      <FormSubtitle>Dê o primeiro passo para aumentar suas vendas</FormSubtitle>
      <Label htmlFor="nome">Nome</Label>
      <Input
        type="text"
        placeholder="Nome"
        id="nome"
        name="nome"
        value={formValues.nome}
        onChange={handleChange}
      />
      {formErrors.nome && <p>{formErrors.nome}</p>}
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      {formErrors.email && <p>{formErrors.email}</p>}
      <Label htmlFor="telefone">Telefone</Label>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "16px",
          border: "1px solid #999",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "16px",
            width: "180px",
            backgroundColor: "#F0F0F0",
            paddingLeft: "12px",
          }}
        >
          <img src={selectedCountryCode.flag} alt="flag" />
          <Select
            placeholder="Selecione"
            id="countryCode"
            name="countryCode"
            required
            defaultValue=""
            onChange={handleCountryCodeChange}
            style={{
              backgroundColor: "#F0F0F0",
              border: "none",
              paddingLeft: "8px",
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
          value={formValues.telefone}
          onChange={handleChange}
          style={{
            border: "transparent",
            width: "100%",
            paddingLeft: 8,
          }}
        />
      </Box>
      {formErrors.telefone && <p>{formErrors.telefone}</p>}
      <p
        style={{
          textAlign: "left",
          color: "#666666",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </p>
      <FormButton onClick={handleNextStep}>Continuar</FormButton>
    </>
  );
};

export const FormStep2 = (
  handleNextStep,
  handleChange,
  formValues,
  formErrors
) => {
  return <></>;
};

export const FormStep3 = (
  handleNextStep,
  handleChange,
  formValues,
  formErrors
) => {
  return <></>;
};

export const FormStep4 = () => {};
