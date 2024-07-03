import { CellStyled } from "../styles/CellStyles"

interface CellProps {
    value: string
    onClick: () => void
}

const Cell = ({ value, onClick }: CellProps) => {
    return (
        <CellStyled className="cell" onClick={onClick}>
            {value}
        </CellStyled>
    )
}

export default Cell