import * as yup from "yup";

export const validations = yup.object({
  placa: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/,
      "A Placa deve ser informada seguindo padrão AAA0A00"
    ),
  modelo: yup.string().required("Campo obrigatório").min(3).max(15),
  capacidade: yup.number().required("Campo obrigatório"),
  carga: yup.number().required("Campo obrigatório"),
  consumo: yup.number().required("Campo obrigatório"),
  distancia: yup.number().required("Campo obrigatório"),
});
