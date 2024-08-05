import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 15px;
    background-color: #fff;
    border: 5px solid #BF3641;
    padding: 20px;
    width: 50%; 
    max-width: 400px;
    height: 500px;
`;

export const H1 = styled.h1`
    color: #F2BC57;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    border-bottom: 5px solid #BF3641;
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
export const ButtonLogin = styled.button`
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

export const ButtonCadastro = styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #BF3641;
    border-radius: 10px;
    cursor: pointer;
    border: none;
`