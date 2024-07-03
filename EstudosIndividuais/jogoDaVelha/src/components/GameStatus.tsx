import { GameStatusStyled } from "../styles/GamesStatusStyles"

interface GameStatusProps {	
    status: string
}

const GameStatus = ({ status }: GameStatusProps) => {

    
    return (
        <GameStatusStyled className="status">{status}
        </GameStatusStyled>
    )
}

export default GameStatus