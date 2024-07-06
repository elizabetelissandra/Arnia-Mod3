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
    background-color: ${({ theme }: string) => ((theme) === "dark" ? "#012E40" : "#D9D9D9")};
    color: ${({ theme }: string) => ((theme) === "dark" ? "#fff" : "#000")};
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

export const Tipos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 400px;
    height: 100px;
    font-weight: bold;
    font-size: 18px;
    color: white;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    background-color: #BF8F73;
    border: 5px solid #402B23;
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
    font-size: 16px;
    background-color: ${({ theme }) => ((theme) === "dark" ? "#3CA6A6" : "#8C342B")};
    color: ${({ theme }) => ((theme) === "dark" ? "#000" : "#fff")};
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => ((theme) === "dark" ? "#fff9" : "#e25858")};
    }
`

export const ButtonRemover = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
     background-color: ${({ theme }) => ((theme) === "dark" ? "#F2E3D5" : "#F23030")};
    color: ${({ theme }) => ((theme) === "dark" ? "#000" : "#fff")};
    font-weight: bold;
    cursor: pointer;


    &:hover {
        background-color: ${({ theme }) => ((theme) === "dark" ? "#fff9" : "#F238")};
        ;
    }
`