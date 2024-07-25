import { useState } from "react";
import { Botao } from "../styles/ProdutoCompra";

interface CounterProps {
    selectPrice: number
}

const Counter = ({selectPrice}: CounterProps) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Total: ${(selectPrice * count).toFixed(2)}</p>            
            <span>
                <Botao onClick={() => setCount(count - 1)}>-</Botao>
                <span>{count}</span>
                <Botao onClick={() => setCount(count + 1)}>+</Botao>
            </span>
            </div>
    );
};  

export default Counter;