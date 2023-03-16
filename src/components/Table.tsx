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
            <TableCell align="right">Placa do veículo</TableCell>
            <TableCell align="right">Modelo do veículo</TableCell>
            <TableCell align="right">Capacidade do tanque(Litros)</TableCell>
            <TableCell align="right">Carga Máxima(Toneladas)</TableCell>
            <TableCell align="right">Consumo Médio(Por Km)</TableCell>
            <TableCell align="right">Distancia Percorrida(Km)</TableCell>
            <TableCell align="right">Data do registro</TableCell>
            <TableCell align="right">Hora do registro</TableCell>
            <TableCell align="right">Consumo de combustivel Total</TableCell>
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
