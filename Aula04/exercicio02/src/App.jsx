import React, { useState } from 'react';
import Modal from './components/modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Exemplo de Modal</h1>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal show={isModalOpen} Close={closeModal}>
        <h2>O que seria modal?</h2>
        <p>É reutilizável e pode ser utilizado em diferentes partes da aplicação para exibir diversos tipos de conteúdo.</p>
      </Modal>
    </div>
  );
};

export default App
