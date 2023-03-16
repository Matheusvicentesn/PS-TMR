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
      <Container
        maxWidth="sm"
        sx={{
          
          borderRadius: "16px",
          backgroundColor: "white",
          marginTop: "20px", height: { sm: "90vh", md: "80vh", xs: "95vh" }
        }}
      >
        <Box sx={{ flexDirection: "row-reverse" }} display="flex">
          <Button onClick={handleOpenInfo}>
            <InfoIcon color="secondary"></InfoIcon>
          </Button>
        </Box>

        <Typography variant="h3" gutterBottom align="center" marginTop={"5px"}>
          Cálculo de Combustível
        </Typography>
        <FormCalc></FormCalc>
        <Box
          component="span"
          m={5}
          justifyContent=""
          alignItems="center"
          sx={{
            display: { sm: "grid", md: "flex", xs: "grid" },
            justifyContent: { md: "space-between" },
          }}
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
            Limpar campos
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
        <Modald
          open={open}
          close={handleClose}
          height={0}
          bgcolor={false}
          top="5%"
        >
          <HistoryTable></HistoryTable>
        </Modald>
        <Modald
          open={openInfo}
          close={handleCloseInfo}
          height={150}
          bgcolor={true}
          top="20%"
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
