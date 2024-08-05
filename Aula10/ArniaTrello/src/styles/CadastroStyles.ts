import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    border-radius: 15px;
    background-color: #BF3641;
    padding: 20px;
`;

export const H1 = styled.h1`
    color: #F2BC57;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
`
export const H2 = styled.h2`
    color: white;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
`
export const P = styled.p`
    color: white;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    
    font-size: 20px;
    border-radius: 10px;
    gap: 10px;
`
export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border: none;
`

export const ButtonCadastro = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    background-color: #F2BC57;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border: none;
`