import React from 'react'
import './styles.css'

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
    <div>
        <h1>Lista de Compras</h1>

        <ul id="list">

        </ul>

        <button onClick={addItem}>Adicionar item</button>
    </div>
  )
}

export default List