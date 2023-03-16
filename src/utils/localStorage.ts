import { getCurrentDate } from "./dateFormat";

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
  const date = getCurrentDate();
  const time = new Date().toLocaleTimeString();
  history.push({
    id,
    plate: values.plate,
    model: values.model,
    fuelCapacity: values.fuelCapacity,
    carLoad: values.carLoad,
    consumption: values.consumption,
    distance: values.distance,
    date,
    time,
    total: calc,
  });
  localStorage.setItem("history", JSON.stringify(history));
}
