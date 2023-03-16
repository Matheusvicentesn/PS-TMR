import * as yup from "yup";

export const validations = yup.object({
  plate: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/,
      "A Placa deve ser informada seguindo padrão AAA0A00"
    ),
  model: yup.string().required("Campo obrigatório").min(3).max(15),
  fuelCapacity: yup
    .number()
    .typeError("Campo precisa conter um número")
    .required("Campo obrigatório"),
  carLoad: yup
    .number()
    .typeError("Campo precisa conter um número")
    .required("Campo obrigatório"),
  consumption: yup
    .number()
    .typeError("Campo precisa conter um número")
    .required("Campo obrigatório"),
  distance: yup
    .number()
    .typeError("Campo precisa conter um número")
    .required("Campo obrigatório"),
});
