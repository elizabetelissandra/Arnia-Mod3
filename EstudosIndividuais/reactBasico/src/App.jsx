import './App.css'
import UserCard from './components/usercard'
import Card from './components/cardDados'

// Crie um componente UserCard que receba props como name, age e email e exiba essas informações em um cartão.


function App() {
  return (
    <div className="App">
     { UserCard(Card)}
    </div>
  )
}

export default App
