export const phoneRegex = /^[0-9]{2}9[0-9]{8}$/;
export const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
import * as yup from "yup";

export const notEmptyString = yup
  .string()
  .trim()
  .required("Este campo é obrigatório")
  .test(
    "not-empty",
    "Este campo não pode ser uma string vazia",
    function (value) {
      return value !== "";
    }
  );
