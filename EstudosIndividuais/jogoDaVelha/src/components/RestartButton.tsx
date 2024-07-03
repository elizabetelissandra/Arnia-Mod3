import { RestartButtonStyled } from "../styles/RestartButtonStyles"

interface RestartButtonProps {
    onRestart: () => void
    children: string
}

const RestartButton = ({ onRestart, children }: RestartButtonProps) => {


    return (
        <RestartButtonStyled onClick={onRestart}>
            {children}
        </RestartButtonStyled>
    )
}

export default RestartButton