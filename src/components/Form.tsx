import styled from "@emotion/styled";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFormik } from "formik";
import { useState } from "react";
import { calc } from "../utils/calc";
import { saveLocalStorage } from "../utils/localStorage";
import { validations } from "../utils/validations";
import { Modald } from "./Modal";
import { HistoryTable } from "./Table";

const FormStyled = styled("div")({});
export const Form = () => {
  const [resul, setResul] = useState(0);
  const formik = useFormik({
    initialValues: {
      placa: "",
      modelo: "",
      capacidade: "",
      carga: "",
      consumo: "",
      distancia: "",
    },
    validationSchema: validations,

    onSubmit: (values) => {
      const total = calc(values);
      setResul(total);
      saveLocalStorage(values, total);
    },
  });

  const history = JSON.parse(localStorage.getItem("history") || "[]");

  // Modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ border: 1, borderColor: "#00A335", height: "80vh" }}
    >
      <h1>Calcule</h1>
      <Modald aberto={open} fechado={handleClose}>
        <HistoryTable></HistoryTable>
      </Modald>

      <FormStyled>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="placa"
            name="placa"
            label="Placa"
            fullWidth
            margin="dense"
            onChange={formik.handleChange}
            error={formik.touched.placa && Boolean(formik.errors.placa)}
            helperText={formik.touched.placa && formik.errors.placa}
          ></TextField>
          <TextField
            id="modelo"
            name="modelo"
            label="Modelo"
            fullWidth
            margin="dense"
            onChange={formik.handleChange}
            error={formik.touched.modelo && Boolean(formik.errors.modelo)}
            helperText={formik.touched.modelo && formik.errors.modelo}
          ></TextField>
          <TextField
            type="number"
            id="capacidade"
            name="capacidade"
            label="Capacidade do tanque"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">Litros</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={
              formik.touched.capacidade && Boolean(formik.errors.capacidade)
            }
            helperText={formik.touched.capacidade && formik.errors.capacidade}
          ></TextField>

          <TextField
            type="number"
            id="carga"
            name="carga"
            label="Carga máxima"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">Toneladas</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={formik.touched.carga && Boolean(formik.errors.carga)}
            helperText={formik.touched.carga && formik.errors.carga}
          ></TextField>
          <TextField
            type="number"
            id="consumo"
            name="consumo"
            label="Consumo médio"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">Litros</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={formik.touched.consumo && Boolean(formik.errors.consumo)}
            helperText={formik.touched.consumo && formik.errors.consumo}
          ></TextField>
          <TextField
            type="number"
            id="distancia"
            name="distancia"
            label="Distância percorrida na jornada"
            margin="dense"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">Km</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={formik.touched.distancia && Boolean(formik.errors.distancia)}
            helperText={formik.touched.distancia && formik.errors.distancia}
          ></TextField>
          <Box
            component="span"
            m={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button color="primary" variant="contained" type="submit">
              Calcular
            </Button>
            <Button color="primary" variant="contained" type="reset">
              Limpar Campos
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                handleOpen();
              }}
            >
              Histórico
            </Button>
          </Box>
        </form>
        {resul === 0 ? "" : <h2> O resultado é: {resul}</h2>}
      </FormStyled>
    </Container>
  );
};
