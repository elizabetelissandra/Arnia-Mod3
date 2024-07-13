import {
  CloseButton,
  ConfirmButton,
  InputQuant,
  ModalContent,
  ModalStyled,
  Pergunta,
  Title,
} from "../styles/ModalStyles";
import { ModalProps } from "../types/ModalProps";

const Modal = ({show, onClose, onConfirmRemove, handleQuantityChange, quantity }: ModalProps) => {
  

  // const productIdParaBuscar = itemToRemove;

  // const produtoEncontrado = products.find(produto => produto.id === productIdParaBuscar);

  // if(!produtoEncontrado){
  //   return null
  // }
  

    if (!show) {
      return null;
    }

    return (
      <ModalStyled>
        <ModalContent className="modal-content">
          <Title>Controle de Estoque</Title>
          <Pergunta>
            Informe a quantidade desejada:
          </Pergunta>
          <InputQuant
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Informe quantidade desejada"
          />
          <div>
            <CloseButton className="cancel-button" onClick={onClose}>
              Cancelar
            </CloseButton>
            <ConfirmButton
              className="confirm-button"
              onClick={() => onConfirmRemove()}
            >
              Confirmar Remoção
            </ConfirmButton>
          </div>
        </ModalContent>
      </ModalStyled>
    );

};

export default Modal;
