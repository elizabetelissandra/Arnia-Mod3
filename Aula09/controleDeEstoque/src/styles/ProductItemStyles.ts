import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin: 20px;
    background-color: #D9D9D9;
`

export const Paragraph = styled.p`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #8C342B
    font-size: 18px;
    margin-bottom: 10px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`

export const Quantidades = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 300px;
    height: 100px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`

export const ButtonQuantidades = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #8C342B;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #BF907E;
    }
`

export const ButtonRemover = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
    }
`