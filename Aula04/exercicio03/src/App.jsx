import React, {useState} from 'react'
import Modal from './components/modal.jsx'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [greeting, setGretting] = useState('Olá')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const toggleGreting = () => {

    if (greeting === 'Olá') {
      setGretting('Até mais')
    }

    if (greeting === 'Até mais') {
      setGretting('Olá')
    }
  }

  return (
    <div className='appDiv'>
      <h1>Exemplo de Modal</h1>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        show={isModalOpen}
        Close={closeModal}
        count={count}
        increment={increment}
        decrement={decrement}
        greeting={greeting}
        toggleGreting={toggleGreting}
        children={'Elizabete'}
      />
    </div>
  )
}

export default App
