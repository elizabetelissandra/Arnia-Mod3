import { CloseButton, ConfirmButton, ModalContent, ModalStyled, Pergunta, Title } from "../styles/ModalStyles";
import { ModalProps } from "../types/ModalProps";

const Modal = ({ show, onClose, onConfirmRemove }: ModalProps) => {
  if (!show) {
    return null;
  }

  return (
    <ModalStyled >
      <ModalContent className="modal-content">
        <Title>Controle de Estoque</Title>
        <Pergunta>Tem certeza que deseja remover este item?</Pergunta>
        <div>
          <CloseButton className="cancel-button" onClick={onClose}>
            Cancelar
          </CloseButton>
          <ConfirmButton className="confirm-button" onClick={onConfirmRemove}>
            Confirmar Remoção
          </ConfirmButton>
      </div>
    </ModalContent>
    </ModalStyled>
  );
};
export default Modal;
