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
              <b>Consumo litro por tonelada por Km</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history?.map(
            (data: {
              id: string;
              plate: string;
              model: string;
              fuelCapacity: number;
              carLoad: number;
              consumption: number;
              distance: number;
              date: string;
              time: string;
              total: number;
            }) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data.plate}</TableCell>
                <TableCell align="center">{data.model}</TableCell>
                <TableCell align="center">{data.fuelCapacity}</TableCell>
                <TableCell align="center">{data.carLoad}</TableCell>
                <TableCell align="center">{data.consumption}</TableCell>
                <TableCell align="center">{data.distance}</TableCell>
                <TableCell align="center">{data.date}</TableCell>
                <TableCell align="center">{data.time}</TableCell>
                <TableCell align="center">{data.total.toFixed(4)}L</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
