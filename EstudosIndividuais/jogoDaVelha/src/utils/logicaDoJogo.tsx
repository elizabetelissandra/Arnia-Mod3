import RestartButton from "../components/RestartButton";

export const getMovimentos = (tabuleiro: string[]) => {
  return tabuleiro.filter((cell) => cell !== null).length;
};

export const Empate = (tabuleiro: string[], setTabuleiro: any) => {
  if (getMovimentos(tabuleiro)) {
    return (
      <>
        <h2>Empate</h2>
        <RestartButton onRestart={() => setTabuleiro(Array(9).fill(null))}>
          Reiniciar
        </RestartButton>
      </>
    );
  }
};

export const vencedor = (tabuleiro: string[], setTabuleiro: any) => {
  if (verificarVencedor(tabuleiro)) {
    return (
      <>
        <h2>Jogador {verificarVencedor(tabuleiro)} ganhou o jogo!</h2>
        <RestartButton onRestart={() => setTabuleiro(Array(9).fill(null))}>
          Reiniciar
        </RestartButton>
      </>
    );
  }
};

export const verificarVencedor = (tabuleiro: string[]) => {
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

