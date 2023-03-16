import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const HistoryTable = () => {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Placa do veículo</b>
            </TableCell>
            <TableCell align="center">
              <b>Modelo do veículo</b>
            </TableCell>
            <TableCell align="center">
              <b>Capacidade do tanque(Litros)</b>
            </TableCell>
            <TableCell align="center">
              <b>Carga Máxima(Toneladas)</b>
            </TableCell>
            <TableCell align="center">
              <b>Consumo Médio(Por Km)</b>
            </TableCell>
            <TableCell align="center">
              <b>Distancia Percorrida(Km)</b>
            </TableCell>
            <TableCell align="center">
              <b>Data do registro</b>
            </TableCell>
            <TableCell align="center">
              <b>Hora do registro</b>
            </TableCell>
            <TableCell align="center">
              <b>Consumo de combustivel Total</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history?.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.plate}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.fuelCapacity}</TableCell>
              <TableCell align="right">{row.carLoad}</TableCell>
              <TableCell align="right">{row.consumption}</TableCell>
              <TableCell align="right">{row.distance}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
