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
      plate: "",
      model: "",
      // @ts-ignore
      fuelCapacity: "",
      // @ts-ignore
      carLoad: "",
      // @ts-ignore
      consumption: "",
      // @ts-ignore
      distance: "",
    },
    validationSchema: validations,

    onSubmit: (values: {
      carLoad: number;
      distance: number;
      consumption: number;
      fuelCapacity: number;
      plate: string;
      model: string;
    }) => {
      const total = calc(values);
      setResul(total);
      saveLocalStorage(values, total);
    },
  });

  return (
    <>
      <form id="calcForm" onSubmit={formik.handleSubmit}>
        <TextField
          id="plate"
          name="plate"
          label="Placa"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Placa do veículo</InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          error={formik.touched.plate && Boolean(formik.errors.plate)}
          helperText={formik.touched.plate && formik.errors.plate}
        ></TextField>

        <TextField
          id="model"
          name="model"
          label="Modelo"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Modelo do veículo</InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          error={formik.touched.model && Boolean(formik.errors.model)}
          helperText={formik.touched.model && formik.errors.model}
        ></TextField>

        <TextField
          type="number"
          id="fuelCapacity"
          name="fuelCapacity"
          label="Capacidade do tanque"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Litros</InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          error={
            formik.touched.fuelCapacity && Boolean(formik.errors.fuelCapacity)
          }
          helperText={formik.touched.fuelCapacity && formik.errors.fuelCapacity}
          
        ></TextField>

        <TextField
          type="number"
          id="carLoad"
          name="carLoad"
          label="Carga máxima"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Toneladas</InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          error={formik.touched.carLoad && Boolean(formik.errors.carLoad)}
          helperText={formik.touched.carLoad && formik.errors.carLoad}
        ></TextField>
        <TextField
          type="number"
          id="consumption"
          name="consumption"
          label="Consumo médio"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Litros por 100km</InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          error={
            formik.touched.consumption && Boolean(formik.errors.consumption)
          }
          helperText={formik.touched.consumption && formik.errors.consumption}
        ></TextField>

        <TextField
          type="number"
          id="distance"
          name="distance"
          label="Distância percorrida na jornada"
          margin="dense"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
          }}
          onChange={formik.handleChange}
          error={formik.touched.distance && Boolean(formik.errors.distance)}
          helperText={formik.touched.distance && formik.errors.distance}
        ></TextField>
      </form>
      {resul === 0 ? (
        ""
      ) : (
        <Typography variant="h4" gutterBottom align="center">
          O consumo total de combustível é: {resul.toFixed(4)}L
        </Typography>
      )}
    </>
  );
};
