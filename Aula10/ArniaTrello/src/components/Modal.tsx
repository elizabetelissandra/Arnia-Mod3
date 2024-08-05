import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DivForm, DivModal } from "../styles/ModalStyles";
import { Fade, style } from "./FadeModal";

interface ModalProps{
  handleClose: () => void
  handleSubmit: () => void
  open: boolean
  setTitulo: React.Dispatch<React.SetStateAction<string>>
  setDescricao: React.Dispatch<React.SetStateAction<string>>
  titulo: string
  descricao: string
  isEditing: boolean
}


export default function SpringModal({ handleClose, handleSubmit, open, setTitulo, setDescricao, titulo, descricao, isEditing}: ModalProps) {
 

  return (
    <div>
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
              <DivModal>{isEditing ? "Editar Tarefa" : "Criar nova Tarefa"}</DivModal>
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
                  label="Conteúdo"
                  fullWidth
                  placeholder="Placeholder"
                  rows={5}
                  color="error"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  multiline
                />
                <Button onClick={handleSubmit}>{isEditing ? "Editar Tarefa" : "Criar Tarefa"}</Button>
              </DivForm>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
