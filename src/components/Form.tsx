import { InputAdornment, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { calc } from "../utils/calc";
import { saveLocalStorage } from "../utils/localStorage";
import { validations } from "../utils/validations";

export const FormCalc = () => {
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

  return (
    <>
      <form id="calcForm" onSubmit={formik.handleSubmit}>
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
          error={formik.touched.capacidade && Boolean(formik.errors.capacidade)}
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
            startAdornment: <InputAdornment position="end">Km</InputAdornment>,
          }}
          onChange={formik.handleChange}
          error={formik.touched.distancia && Boolean(formik.errors.distancia)}
          helperText={formik.touched.distancia && formik.errors.distancia}
        ></TextField>
      </form>
      {resul === 0 ? (
        ""
      ) : (
        <Typography variant="h4" gutterBottom align="center">
          O resultado é {resul}
        </Typography>
      )}
    </>
  );
};
