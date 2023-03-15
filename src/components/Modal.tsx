import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";

export const Modald = (props: any) => {
  const style = {
    position: "absolute" as "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  if (props.aberto === false) return null;
  else {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.aberto}
          onClose={props.fechado}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",

            overflowY: "scroll",
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          <Fade in={props.aberto}>
            <Box sx={style}>{props.children}</Box>
          </Fade>
        </Modal>
      </div>
    );
  }
};
