import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import React from "react";
import { Container, DivTodoItem, H1 } from "../../styles/styles";

interface TodoListProps {
    addTodo: (tarefa: string) => void;
}

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (tarefa: any) => {
    if(tarefa.trim()) {
      setTodos([...todos, tarefa]);
    }
  };

  const handleRemove = (index: number) =>{
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <Container>
      <DivTodoItem>
      <H1>Lista de Tarefas</H1>
      <TodoForm addTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onRemove={() => handleRemove(index)} />
        ))}
      </ul>
      </DivTodoItem>
    </Container>
  );
};

export default TodoList;