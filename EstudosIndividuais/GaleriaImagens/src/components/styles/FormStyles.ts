import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #FFA500;
    font-family: 'Poppins', sans-serif;
`

const Form = styled.form`    
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    background-color: #FFD700;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 10px;

    label{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }

    input{  
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 16px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ccc;
        outline: none;
        margin-top: 5px;
    }

    button{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 20px;
        padding: 10px;
        border-radius: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: #87CEEB;
        }
    }
`

const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`

const H1 = styled.h1`
    text-align: center;
`
const DivGaleria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    background-color: #f0f0f0;
`

const Imagem = styled.img`
    max-width: 500px;
    max-height: 500px;
    border-radius: 10px;
    margin-bottom: 10px;
`

export {DivForm, Form, H1, Imagem, DivGaleria, Main}