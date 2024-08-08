import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Poppins", sans-serif;
    background-color: #BF3641;
    width: 100%;
    height: 90px;
`
export const H1 = styled.h1`
    color: #F2BC57;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
`

export const H3 = styled.h3`
    
    font-family: 'Poppins', sans-serif;
    color: #F2BC57;
`


export const H4 = styled.h4`
    color: white;
    font-family: 'Poppins', sans-serif;
`
export const SairButton = styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    border-radius: 10px
    cursor: pointer;
    border: none;
    background-color: #BF3641;
    color: white;
`
export const DivSair = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    border-radius: 15px;
    background-color: #BF3641;
    width: 50%; 
    gap: 20px;   
`
export const DivTabelas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    gap: 20px;
`
export const DivByTarefas = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 15px;
    padding: 20px;
    margin: 0 auto;
    width: 100%;
    height: 1000px;
    gap: 20px;
`

export const DivTarefas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 15px;
    background-color: #BF3641;
    padding: 20px;
    width: 100%;
    min-height: 900px;
    margin: 0 auto;
    gap: 20px;
`

export const DivModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex;
    border-radius: 15px;
    gap: 20px;
`