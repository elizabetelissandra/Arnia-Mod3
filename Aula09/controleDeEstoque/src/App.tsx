import './App.css'

import ProductList from './components/ProductList'

function App() {


 const handleAddProduct = () => {
  
  }

  function handleRemoverProduct(): void {
  
  }

  return (
    <>
      <ProductList addProduct={handleAddProduct} Remover={handleRemoverProduct}/>
    </>
  )
}

export default App
