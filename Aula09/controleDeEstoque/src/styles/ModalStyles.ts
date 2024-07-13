import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    max-width: 100%;
    text-align: center;
`
export const Title = styled.h2`
    font-size: 40px;
    margin-bottom: 20px;

`

export const Pergunta = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`

export const InputQuant = styled.input`
    width: 40px;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
`

export const CloseButton = styled.button`
    background: #ff5c5c;
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;

    &:hover {
        background: #d9534f;
    }

`

export const ConfirmButton = styled.button`
    background: #5c5cff;
    border: none;
    color: white;
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;

    &:hover {
        background: #2a2aff;
    }
`