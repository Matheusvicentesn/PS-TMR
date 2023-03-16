export function calc(values: {
  carLoad: number;
  distance: number;
  consumption: number;
}) {
  const carLoad = values.carLoad;
  const distance = values.distance;
  const consumption = values.consumption;
  const LitesPerkm = consumption / 100;

  const kiloPerKm = carLoad / (distance * 0.001);
  const litersTonKm = (LitesPerkm * 1000) / (kiloPerKm * 1000);

  return litersTonKm;
}
