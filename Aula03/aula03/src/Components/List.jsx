import React from 'react'

const List = () => {
    const addItem = () => {
        const newItem = prompt("Qual item deseja adicionar?")
        if (newItem) {
            const ul = document.getElementById("list")
            const li = document.createElement("li")
            li.textContent = newItem
            ul.appendChild(li)
        }
    }
  return (
    <>
    <h2>Minha lista de compras</h2>
    <ul id="list">
        <li>arroz</li>
        <li>macarrao</li>
        <li>feijao</li>
    </ul>
    <button onClick={addItem}>Adicionar item</button>
    </>
  )
}

export default List