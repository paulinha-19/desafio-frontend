import * as yup from "yup";

export const formStepSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório"),
  cep: yup.string().required("O cep é obrigatório"),
  estado: yup.string().required("O estado é obrigatório"),
  endereco: yup.string().required("O endereco é obrigatório"),
  numero: yup.number().positive("O número deve ser positivo"),
  complemento: yup.string(),
  nomeDaLoja: yup.string().required("O nome da loja é obrigatório"),
  cnpj: yup.string().required("O CNPJ é obrigatório"),
  tipoDeLoja: yup.string().required("O tipo de loja é obrigatório"),
});
