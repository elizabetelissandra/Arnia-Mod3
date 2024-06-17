import "./App.css";
import React, { useState } from "react";
import Gretting from "./components/gretting";

// Crie um componente ToggleMessage que alterne entre exibir "Hello" e "Goodbye" quando um botão é clicado.

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(
    "Seja bem-vinda Elizabete, como está?"
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleGretting = () => {
    setGreeting((prevGreting) =>
      prevGreting === "Seja bem-vinda Elizabete, como está?"
        ? "Tchau Elizabete, até um próximo encontro."
        : "Seja bem-vinda Elizabete, como está?"
    );
  };

  return (
    <div className="appDiv">
      <h1>Exemplo de Modal</h1>
      <button onClick={openModal}>Abrir Modal</button>
      <Gretting
        show={isModalOpen}
        Close={closeModal}
        count={count}
        increment={increment}
        decrement={decrement}
        greeting={greeting}
        toggleGreeting={toggleGretting}
      />
    </div>
  );
}

export default App;
