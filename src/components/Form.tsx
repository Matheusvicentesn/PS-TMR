import styled from "@emotion/styled";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFormik } from "formik";
import { useState } from "react";

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
    onSubmit: (values) => {
      console.log(values);
      let carga = values.carga;
      let distancia = values.distancia;
      let consumo = values.consumo;

      let kilo_por_km = parseInt(carga) / (parseInt(distancia) * 0.001);
      let litros_tonelada_km =
        (parseInt(consumo) * 1000) / (kilo_por_km * 1000);

      console.log(kilo_por_km);
      console.log(litros_tonelada_km);
      setResul(litros_tonelada_km);
    },
  });

  return (
    <Container
      maxWidth="sm"
      sx={{ border: 1, borderColor: "#00A335", height: "80vh" }}
    >
      <h1>Calcule</h1>
      <FormStyled>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="placa"
            name="placa"
            label="Placa"
            fullWidth
            margin="dense"
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            id="modelo"
            name="modelo"
            label="Modelo"
            fullWidth
            margin="dense"
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            id="capacidade"
            name="capacidade"
            label="Capacidade do tanque"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Litros</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            id="carga"
            name="carga"
            label="Carga máxima"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Toneladas</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            id="consumo"
            name="consumo"
            label="Consumo médio"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Litros</InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            id="distancia"
            name="distancia"
            label="Distância percorrida na jornada"
            margin="dense"
            onChange={formik.handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Km</InputAdornment>
              ),
            }}
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
            <Button color="primary" variant="contained">
              Limpar Campos
            </Button>
            <Button color="primary" variant="contained">
              Histórico
            </Button>
          </Box>
        </form>

        <h2> O resultado é: {resul}</h2>
      </FormStyled>
    </Container>
  );
};
