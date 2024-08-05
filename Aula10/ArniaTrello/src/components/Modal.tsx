import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DivForm, DivModal } from "../styles/ModalStyles";
import { Fade, style } from "./FadeModal";


export default function SpringModal({handleOpen, handleClose, handleSubmit, open, setTitulo, setDescricao, titulo, descricao}: any) {
 

  return (
    <div>
      <Button onClick={handleOpen}>Criar Tarefa</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              <DivModal>Criar nova Tarefa</DivModal>
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <DivForm>
                <TextField
                  id="outlined-basic"
                  label="Título"
                  variant="outlined"
                  color="warning"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <TextField
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  fullWidth
                  placeholder="Placeholder"
                  rows={5}
                  color="warning"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  multiline
                />
                <Button onClick={handleSubmit}>Criar Tarefa</Button>
              </DivForm>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
