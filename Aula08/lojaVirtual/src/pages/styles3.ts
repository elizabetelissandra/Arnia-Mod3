import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: black;
`
const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: black;
    gap: 35px;
    `

const InfoProduto = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    line-height: 36px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 15px;
    margin: 10px;
    gap: 25px;
    font-family: "Poppins", sans-serif;
`

const DivBotao = styled.div`
    display: flex;
    justify-content: center;
`

export { Div, Container, DivBotao, InfoProduto, DivImg }