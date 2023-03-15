export function calc(values: any) {
  let carga = values.carga;
  let distancia = values.distancia;
  let consumo = values.consumo;

  let kilo_por_km = parseInt(carga) / (parseInt(distancia) * 0.001);
  let litros_tonelada_km = (parseInt(consumo) * 1000) / (kilo_por_km * 1000);

  console.log(kilo_por_km);
  console.log(litros_tonelada_km);

  return litros_tonelada_km;
}
