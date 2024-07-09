import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: ${({ theme }: string) =>
    theme === "dark" ? "#333" : "#8C5E4D"};
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: ${({ theme }: string) => (theme === "dark" ? "#D9D9D9" : "#fff")};
`;
export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  // background-color: ${({ theme }: string) =>
    theme === "dark" ? "#333" : "#8C5E4D"};
`;

export const DivFiltros = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 98%;
  margin-bottom: 20px;
`;

export const InputSearch = styled.input`
  width: 300px;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const Select = styled.select`
    width: 200px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    font-weight: bold
    font-size: 21px
`;
export const Option = styled.option`
    background-color: #F2DEC4;
    color: #8C5E4D
    font-weight: bold
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  padding: 0;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#506266" : "#BF907E"};
`;

export const DivPreco = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;


export const BotaoTheme = styled.button`
  width: 100px;
  height: 80px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#012E40" : "#D9D9D9"};
  color: ${({ theme }: string) => (theme === "dark" ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 18px;

  img {
    width: 40px;
    height: 40px;

    animation: ${({ theme }) => (theme === "dark" ? spin : "")};
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

