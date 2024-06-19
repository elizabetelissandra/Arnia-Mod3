import './App.css'
import Forms from './components/Forms'
import UserName from './components/UserName'

// Criar um formulário para cadastro de usuário com validação dos seguintes campos:

// Nome completo (obrigatório)
// E-mail (obrigatório e formato válido)
// Senha (obrigatória, com no mínimo 8 caracteres, contendo letras maiúsculas, minúsculas, números e símbolos)
// Confirmação de senha (deve ser igual à senha)
// Instruções:

// Crie um componente React utilizando o React Hook Form para gerenciar o formulário de cadastro.
// Implemente a validação dos campos conforme os requisitos descritos.
// Utilize componentes de input adequados para cada tipo de dado (texto, email, senha).
// Apresente mensagens de erro claras e amigáveis para o usuário em caso de dados inválidos.
// Ao enviar o formulário, capture os dados do usuário e exiba-os no 
// console.

function App() {
  

  return (
    <div className='divApp'>
      <h1>Cadastro de Clientes</h1>
      <UserName/>
    </div>
  )
}

export default App
