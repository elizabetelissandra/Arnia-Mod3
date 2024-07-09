import { useEffect } from "react";
import Cell from "./Cell";
import { TabuleiroStyled } from "../styles/BoardStyles";
import GameStatus from "./GameStatus";
import {
  getMovimentos,
  vencedor,
  Empate,
  verificarVencedor,
} from "../utils/logicaDoJogo";
import { useLogica, useLogicaContext } from "../context/logicaProvider";
import { JogoDaVelhaData } from "../types/jogoDaVelhaData";

const JogoDaVelha = (): JogoDaVelhaData => {
  const { tabuleiro, jogador, setTabuleiro, maquinaJoga, handleCellClick } =
    useLogicaContext();

  useEffect(() => {
    if (jogador === "O") {
      maquinaJoga();
    }
  }, [jogador]);

  const winner = verificarVencedor(tabuleiro);
  const empate = getMovimentos(tabuleiro);

  if (winner) {
    return vencedor(tabuleiro, setTabuleiro);
  }
  if (empate === 9) {
    return Empate(tabuleiro, setTabuleiro);
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
