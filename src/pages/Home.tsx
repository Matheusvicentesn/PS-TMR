import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { FormCalc } from "../components/Form";
import { Modald } from "../components/Modal";
import { HistoryTable } from "../components/Table";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ border: 1, borderColor: "#00A335", height: "80vh" }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Calcule
        </Typography>
        <FormCalc></FormCalc>
        <Box
          component="span"
          m={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            form="calcForm"
            color="primary"
            variant="contained"
            type="submit"
          >
            Calcular
          </Button>
          <Button
            form="calcForm"
            color="primary"
            variant="contained"
            type="reset"
          >
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
        <Modald aberto={open} fechado={handleClose}>
          <HistoryTable></HistoryTable>
        </Modald>

      </Container>
    </>
  );
};
