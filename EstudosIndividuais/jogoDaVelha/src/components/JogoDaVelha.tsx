import { useState } from "react";
import Cell from "./Cell";
import { TabuleiroStyled } from "../styles/BoardStyles";
import GameStatus from "./GameStatus";

import {getMovimentos, vencedor, Empate} from "../utils/logicaDoJogo";

const JogoDaVelha = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogador, setJogador] = useState("X");

  const handleCellClick = (index: number) => () => {
    if (tabuleiro[index]) return;
    const newTabuleiro = [...tabuleiro];
    newTabuleiro[index] = jogador;
    setTabuleiro(newTabuleiro);
    setJogador(jogador === "X" ? "O" : "X");
  };

  const verificarVencedor = (tabuleiro: string[]) => {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (
        tabuleiro[a] &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return tabuleiro[a];
      }
    }
    return null;
  };

  const winner = verificarVencedor(tabuleiro);
  const empate = getMovimentos(tabuleiro);

  if (winner) {
    return vencedor(tabuleiro, setTabuleiro)
  }
  if(empate === 9){
    return Empate(tabuleiro, setTabuleiro)
}

  return (
    <>
      <GameStatus status={`Jogando jogador ${jogador}`} />
      <TabuleiroStyled>
        {tabuleiro.map((cell, index) => (
          <Cell key={index} value={cell} onClick={handleCellClick(index)} />
        ))}
      </TabuleiroStyled>
    </>
  );
};

export default JogoDaVelha;


