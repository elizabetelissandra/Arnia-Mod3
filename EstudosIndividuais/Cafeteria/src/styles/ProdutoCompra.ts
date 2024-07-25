import styled from "styled-components";

export const DivProduto = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #272221;
    justify-content: center;
    gap: 50px;
    width: 100%;
`

export const DivHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272221;
    height: 300px;
    color: white;   
`


export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    
`


export const SpanCategory = styled.span`
    color: #fff;
    background-color: #4F4F4F;
    font-size: 10px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
`

export const SpanNome = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`
export const PDescription = styled.p`
    color: #fff;
    font-size: 13px;
    margin-top: 10px;
`
export const Img = styled.img`
    width: 150px;
    height: 150px;
`

export const DivBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const DivSelecao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 10px;
`

export const PBotoes = styled.p`
    margin: 0;
    font-size: 13px;
    color: #928e9a;
    padding-left: 15px;
`
export const Botao = styled.button`
    background-color: #DCDCDC;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 100px;
    height: 30px;

    &:hover {
        border: 1px solid #2e195c;
        background-color: #fff;
        color: #2e195c;
    }
`

export const BotaoCarrinho = styled.button`
    background-color: #2e195c;
    border: 1px solid #2e195c;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 200px;
    height: 30px;
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #2e195c;
    }
`

export const DivCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
`