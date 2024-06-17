import React from 'react'
import './gretting.css'


const Gretting = ({show, Close, count, increment, decrement, greeting, toggleGreeting}) => {
if (!show){
        return null
    }
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button className='close-button' onClick={Close}>Fechar</button>
            <h2>{greeting}</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={toggleGreeting}>Mudar saudação</button>
    </div>
    </div>
)
}


export default Gretting;