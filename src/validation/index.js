import * as yup from "yup";
import {
  phoneRegex,
  cepRegex,
  notEmptyString,
} from "../utils/brazilPhoneRegex";

export const firstStepSchema = yup.object().shape({
  nome: notEmptyString,
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  telefone: yup
    .string()
    .test(
      "phone",
      "Formato de telefone inválido. Insira algo como xx9xxxxxxxx",
      function (value) {
        return phoneRegex.test(value);
      }
    ),
});

export const secondStepSchema = yup.object().shape({
  cep: yup
    .string()
    .required("O cep é obrigatório")
    .test(
      "cep",
      "Formato inválido. Insira algo como 00000-00",
      function (value) {
        return cepRegex.test(value);
      }
    ),
  estado: yup.string().required("O estado é obrigatório"),
  cidade: yup.string().required("A cidade é obrigatório"),
  endereco: notEmptyString,
  numero: yup
    .mixed()
    .test(
      "positive-integer",
      "O número deve ser um valor inteiro positivo",
      function (value) {
        if (!value) {
          return true;
        }
        if (isNaN(value) || value < 1 || value === "0") {
          return this.createError({
            message:
              "O número deve ser um valor inteiro positivo diferente de 0",
            path: this.path,
          });
        }
        return true;
      }
    ),
  complemento: yup.string(),
});

export const thirdStepSchema = yup.object().shape({
  nomeDaLoja: notEmptyString,
  cnpj: notEmptyString,
  tipoDeLoja: notEmptyString,
});
