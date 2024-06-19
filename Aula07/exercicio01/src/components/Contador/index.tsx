import React, { useState, useEffect } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}

export default Contador