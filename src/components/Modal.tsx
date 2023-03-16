import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";

export const Modald = (props: {
  open: boolean;
  close: any;
  children: string | JSX.Element | JSX.Element[];
  height: number;
  bgcolor: boolean;
  top: string;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: props.top,
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: props.height,
    bgcolor: props.bgcolor === false ? "" : "background.paper",
    boxShadow: 1,
    p: 4,
  };

  if (props.open === false) return null;
  else {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.close}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>{props.children}</Box>
        </Fade>
      </Modal>
    );
  }
};
