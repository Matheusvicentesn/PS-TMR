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
            <TableCell align="right">Placa</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Capacidade</TableCell>
            <TableCell align="right">Carga</TableCell>
            <TableCell align="right">Consumo</TableCell>
            <TableCell align="right">distancia</TableCell>
            <TableCell align="right">data</TableCell>
            <TableCell align="right">hora</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length <= 0
            ? "Não há histórico"
            : history?.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.placa}</TableCell>
                  <TableCell align="right">{row.modelo}</TableCell>
                  <TableCell align="right">{row.capacidade}</TableCell>
                  <TableCell align="right">{row.carga}</TableCell>
                  <TableCell align="right">{row.consumo}</TableCell>
                  <TableCell align="right">{row.distancia}</TableCell>
                  <TableCell align="right">{row.data}</TableCell>
                  <TableCell align="right">{row.hora}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
