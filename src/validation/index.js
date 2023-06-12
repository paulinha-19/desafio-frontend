import * as Yup from "yup";

export const firstStepSchema = Yup.object().shape({
  nome: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  telefone: Yup.string().required("O telefone é obrigatório"),
});

export const secondStepSchema = Yup.object().shape({
  nome: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  telefone: Yup.string().required("O telefone é obrigatório"),
});

export const thirdStepSchema = Yup.object().shape({
  nome: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  telefone: Yup.string().required("O telefone é obrigatório"),
});
