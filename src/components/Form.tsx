import { Button, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      placa: "",
      capacidade: "",
      carga: "",
      consumo: "",
      distancia: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="placa"
          name="placa"
          label="Placa"
          onChange={formik.handleChange}
        ></TextField>
        <TextField
          id="capacidade"
          name="capacidade"
          label="Capacidade do tanque"
          onChange={formik.handleChange}
        ></TextField>
        <TextField
          id="carga"
          name="carga"
          label="Carga máxima"
          onChange={formik.handleChange}
        ></TextField>
        <TextField
          id="consumo"
          name="consumo"
          label="Consumo médio"
          onChange={formik.handleChange}
        ></TextField>
        <TextField
          id="distancia"
          name="distancia"
          label="Distância percorrida na jornada"
          onChange={formik.handleChange}
        ></TextField>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
