import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
    background-color: ;
    background-color: ${({ theme }: string) => ((theme) === "dark" ? "#012E40" : "#D9D9D9")};
    border:5px solid ${({ theme }: string) => ((theme) === "dark" ? "#D9D9D9" : "#ec7963")};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
   background-color: ${({ theme }: string) => ((theme) === "dark" ? "#012E40" : "#D9D9D9")};
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    color: ${({ theme }) => ((theme) === "dark" ? "#fff" : "#000")};
`

export const LabelCheckbox = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
     color: ${({ theme }) => ((theme) === "dark" ? "#fff" : "#000")};
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const BoxInput = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;

    input{
        width: 10%;
        height: 20px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => ((theme) === "dark" ? "#164773" : "#8C342B")};
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #ec7963;
    }
`