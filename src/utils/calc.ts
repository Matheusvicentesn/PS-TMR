export function calc(values: any) {
  let carga = values.carga;
  let distancia = values.distancia;
  let consumo = values.consumo;

  let kilo_por_km = carga / (distancia * 0.001);
  let litros_tonelada_km = (consumo * 1000) / (kilo_por_km * 1000);


  return litros_tonelada_km;
}
