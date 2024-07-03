import { useState } from "react"
import { ModalStyled } from "../styles/ModalStyles"
import { createPortal } from "react-dom"

export const ConteudoModal = ({onRemove}: {onRemove: () => void}) => {
    return (
        <ModalStyled>
            <p>Tem certeza que deseja remover o item?</p>
            <button onClick={onRemove}>Remover</button>
            <button onClick={() => onRemove()}>Cancelar</button>
        </ModalStyled>
    )
}

export const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Remover</button>

            {showModal && createPortal(
                <ConteudoModal onRemove={() => setShowModal(false)}/>,
                document.body
            )}
        </div>
    )
}

