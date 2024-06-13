import React from "react";

const UserItem = ({ name, age, occupation, sum }) => {
  return (
    <li>
      <strong>Nome:</strong> {name}
      <strong>Idade:</strong> {age}
      <strong>Profissão:</strong> {occupation}
      {/* pode ser dessa forma */}
      <button onClick={sum(20, 7)}>Imprimir</button>
      {/* ou dessa forma */}
      <button onClick={() => sum(20, 7)}>Imprimir</button>
    </li>
  );
};

export default UserItem;
