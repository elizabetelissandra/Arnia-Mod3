import './App.css'
import Contador from './components/Contador'

// Crie um componente que mantém um contador. Cada vez que o contador for atualizado, o título da página deve ser atualizado para mostrar o valor atual do contador.

// Passos:
// Crie um componente funcional chamado Counter.

// Use o hook useState para criar um estado count e uma função setCount para atualizá-lo.

// Use o hook useEffect para atualizar o título da página sempre que o valor de count mudar.

// Adicione um botão que, quando clicado, incrementa o valor de count.



function App() {
    return(
    <>
    <Contador/>
    </>
    )
}

export default App
