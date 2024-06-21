import { useState } from 'react'
import './App.css'
import Page1 from './pages/pag1'
import Page2 from './pages/pag2'
import Page3 from './pages/pag3'


function App() {

  const [telaAtual, setTelaAtual] = useState("cart")

  const handleNavigation = (page: string) => {

    setTelaAtual(page)
  }

  return (
    <>

      {telaAtual === "products" && <Page1/>}
      {telaAtual === "cart" && <Page2 map={undefined} id={0} title={''} price={0} image={''} platform={''}/>}
      {telaAtual === "checkout" && <Page3/> }
    </>
  )
}

export default App
