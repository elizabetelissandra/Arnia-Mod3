import Button from './components/button.jsx'
import './App.css'

// Faça um componente funcional que implementa um botão, este componente deverá receber uma prop “label”, que será colocada como o texto deste botão, e mais, quando o botão é clicado, o sistema deverá exibir um alerta mostrando a label deste botão. Implemente no App.tsx três botões diferentes para testar

function App() {
  return (
    <div className='divBotao'>
      <Button label="Button 1"/>
      <Button label="Button 2"/>
      <Button label="Button 3"/>
    </div>
  )
}

export default App
