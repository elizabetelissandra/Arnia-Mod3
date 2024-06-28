import { Button, ButtonDelete, DivLista, ImagemCaderneta } from "../../styles/styles";
import aluna from "../../img/aluna.png"

interface TodoItemProps {
  todo: string;
  onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  return (
    
      <li>
        <DivLista>
        <ImagemCaderneta src={aluna} alt="caderneta colorida" /> {todo} <ButtonDelete onClick={onRemove}>Remover</ButtonDelete>
        </DivLista>
      </li>
    
  );
};
export default TodoItem;
