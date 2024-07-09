import React, { useContext, useState } from "react";

interface LogicaContextData {
  tabuleiro: string[];
  jogador: string;
  maquinaJoga: () => void;
  handleCellClick: (index: number) => () => void;
  setTabuleiro: (tabuleiro: string[]) => void;
}

const LogicaContext = React.createContext({} as LogicaContextData);

export const useLogicaContext = () => useContext(LogicaContext);
export const LogicaProvider = ({ children }: any) => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogador, setJogador] = useState("X");

  const maquinaJoga = () => {
    let index = Math.floor(Math.random() * 9);

    while (tabuleiro[index] !== null && index >= 0 && index < 9) {
      index = Math.floor(Math.random() * 9);
    }
    if (index !== null) {
      const newTabuleiro = [...tabuleiro];
      newTabuleiro[index] = "O";
      setTabuleiro(newTabuleiro);
      setJogador(jogador === "X" ? "O" : "X");
    }
  };

  const handleCellClick = (index: number) => () => {
    if (tabuleiro[index]) return;
    const newTabuleiro = [...tabuleiro];
    newTabuleiro[index] = "X";
    setTabuleiro(newTabuleiro);
    setJogador(jogador === "X" ? "O" : "X");
  };

  return (
    <LogicaContext.Provider
      value={{
        tabuleiro,
        jogador,
        maquinaJoga,
        setTabuleiro,
        handleCellClick,
      }}
    >
      {children}
    </LogicaContext.Provider>
  );
};

export const useLogica = (): LogicaContextData =>
  useContext({ maquinaJoga, handleCellClick });
