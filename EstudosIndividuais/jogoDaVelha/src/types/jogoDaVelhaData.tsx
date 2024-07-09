export interface JogoDaVelhaData {
    tabuleiro: string[];
    verificarVencedor: (tabuleiro: string[]) => string;
    getMovimentos: (tabuleiro: string[]) => number;
    Empate: (tabuleiro: string[], setTabuleiro: any) => void;
    vencedor: (tabuleiro: string[], setTabuleiro: any) => void;
    setTabuleiro: (tabuleiro: string[]) => void;
    setJogador: (jogador: string) => void;
    handleCellClick: (index: number) => () => void;
    maquinaJoga: () => void;
    jogador: string;
}