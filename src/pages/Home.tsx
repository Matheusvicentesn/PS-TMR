import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { FormCalc } from "../components/Form";
import { Modald } from "../components/Modal";
import { HistoryTable } from "../components/Table";
import InfoIcon from "@mui/icons-material/Info";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  return (
    <>
      <Container maxWidth="sm" sx={{ height: "90vh", borderRadius: "16px" }}>
        <Box sx={{ flexDirection: "row-reverse" }} display="flex">
          <Button onClick={handleOpenInfo}>
            <InfoIcon color="secondary"></InfoIcon>
          </Button>
        </Box>

        <Typography variant="h3" gutterBottom align="center">
          Cálculo de de Combustivel
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
            size="medium"
          >
            Calcular
          </Button>
          <Button
            form="calcForm"
            color="primary"
            variant="contained"
            type="reset"
            size="medium"
          >
            Limpar Campos
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            onClick={() => {
              handleOpen();
            }}
          >
            Histórico
          </Button>
        </Box>
        <Modald aberto={open} fechado={handleClose} height={0} bgcolor={false}>
          <HistoryTable></HistoryTable>
        </Modald>
        <Modald
          aberto={openInfo}
          fechado={handleCloseInfo}
          height={150}
          bgcolor={true}
        >
          <Typography variant="h3" gutterBottom align="center">
            Informações
          </Typography>
          <Typography variant="inherit" gutterBottom align="center">
            Em caso de dúvidas estamos sempre próximos pelo e-mail de contato:{" "}
            <a href="mailto:contato@matheusvicente.dev.br">
              contato@matheusvicente.dev.br
            </a>
          </Typography>
        </Modald>
      </Container>
    </>
  );
};
