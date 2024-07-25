import styled from "styled-components";

export const DivHeader = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #272221;
    width: 100%;
    height: 300px;
    color: white;   
    `
    export const H2Header = styled.h2`
    font-size: 30px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: center;
    `

    export const H3Cat = styled.h3`
    color: #2e195c;
    font-size: 18px;
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    `

    export const DivCategorias = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;    
    `

export const Input = styled.input`
    width: 500px;
    height: 30px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #403937;
    color: white;
    border: none;
    outline: none;
    padding-left: 10px;
    `

export const ImgCafes = styled.img`
    position: absolute;
    top: 200px;
    right: 80px;
    width: 80px;
    height: 80px;
    `

export const BotaoTipos = styled.button`
    width: 100px;
    height: 30px;
    margin: 10px;
    border-radius: 15px;
    border: 1px solid #2e195c;
    background-color: #fff;
    color: #2e195c;
    font-weight: bold;
    
    &:hover {
        background-color: #2e195c;
        color: #fff;
    }
    `