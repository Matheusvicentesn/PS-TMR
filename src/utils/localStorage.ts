import { formattedDate } from "./dateFormat";

export function saveLocalStorage(
  values: {
    carLoad: number;
    distance: number;
    consumption: number;
    fuelCapacity: number;
    plate: string;
    model: string;
  },
  calc: number
) {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  const id = "id" + new Date().getTime();
  const date = formattedDate();
  const time = new Date().toLocaleTimeString();
  history.push({
    id,
    placa: values.plate,
    modelo: values.model,
    capacidade: values.fuelCapacity,
    carga: values.carLoad,
    consumo: values.consumption,
    distancia: values.distance,
    data: date,
    hora: time,
    total: calc,
  });
  localStorage.setItem("history", JSON.stringify(history));
}
