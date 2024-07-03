import { useState } from "react"
import { TemaDefault } from "../styles/TemasStyles"

const Temas = () => {
    const [claro, setClaro] = useState(true)
    const [escuro, setEscuro] = useState(false)

    const handleClick = () => {
        setClaro(!claro)
        setEscuro(!escuro)

        if (claro) {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        } else {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
    
        if (escuro) {
            document.body.style.color = 'black'
            document.body.style.backgroundColor = 'white'
        } else {
            document.body.style.color = 'white'
            document.body.style.backgroundColor = 'black'
        }
    }

    

    return (
        <TemaDefault>
            <h1>Temas</h1>
            <button onClick={handleClick}>Mudar Tema</button>
            
        </TemaDefault>
    )
}

export default Temas