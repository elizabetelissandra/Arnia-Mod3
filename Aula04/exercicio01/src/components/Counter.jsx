import React, {useState} from 'react'
import './styles.css'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>Contagem: </p>
        <span>{count}</span>
        <span>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </span>
    </div>
  )
}

export default Counter