import { formattedDate } from "./dateFormat";

export function saveLocalStorage(values: any, calc: number) {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  const id = "id" + new Date().getTime();
  const date = formattedDate();
  const time = new Date().toLocaleTimeString();
  history.push({
    id,
    placa: values.placa,
    modelo: values.modelo,
    capacidade: values.capacidade,
    carga: values.carga,
    consumo: values.consumo,
    distancia: values.distancia,
    data: date,
    hora: time,
    total: calc,
  });
  localStorage.setItem("history", JSON.stringify(history));
}
