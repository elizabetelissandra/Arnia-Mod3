import { useState } from "react";
import { ButtonAdd, Container, Form } from "../../styles/styles";

interface TodoFormProps {
  addTodo: (tarefa: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [tarefa, setTarefa] = useState<string>("");

  const handleChange = (e: any) => {
    setTarefa(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(tarefa);
    setTarefa("");
  };

  

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tarefa}
          onChange={handleChange}
          placeholder="Adicione uma nova tarefa"
        />
        <ButtonAdd  type="submit">Adicionar</ButtonAdd>
      </Form>
    </Container>
  );
};

export default TodoForm;
