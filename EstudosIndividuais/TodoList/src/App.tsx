import { TodoList } from "./components/TodoList"



function App () {

  function handleAddTodo(tarefa: any): void {
    throw new Error("Function not implemented.")
  }

  return (
    <div>
      <TodoList addTodo={handleAddTodo} />
    </div>
  )
}

export default App
