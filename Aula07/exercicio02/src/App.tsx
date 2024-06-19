import './App.css'
import ItemList from '../components/index'


// Crie um componente que busca dados de uma API simulada e filtra a lista de itens com base em um termo de busca.

// Passos:
// Crie um componente funcional chamado ItemList.

// Use o hook useState para criar estados para items, searchTerm e filteredItems.

// Use o hook useEffect para buscar dados de uma "API" (use setTimeout para simular um atraso).

// Use outro useEffect para filtrar os itens com base no termo de busca sempre que searchTerm ou items mudarem.

// Adicione um campo de entrada que permita ao usuário digitar um termo de busca e atualize searchTerm conforme o usuário digita.



function App() {
    return(
    <>
    <ItemList/>
    </>
    )
}

export default App
