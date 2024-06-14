import React from 'react'
import './modal.css'

const Modal = ({show, Close, count, increment, decrement, children, greeting, toggleGreting}) => {
    if(!show){
        return null
    }
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button className='close-button' onClick={Close}>Fechar</button>
            <h2>{greeting} {children}</h2>
            <p>Você tem: {count} anos.</p>
            <button className='botaoModal' onClick={increment}>Incrementar</button>
            <button className='botaoModal' onClick={decrement}>Decrementar</button>
            <button className='botaoModal' onClick={toggleGreting}>Mudar saudação</button>
        </div>
    </div>
  )
}

export default Modal