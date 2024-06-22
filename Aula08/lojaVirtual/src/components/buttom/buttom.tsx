import {Buttom} from "./styles.ts";


interface BotaoProps {
  name: string;
  onClick: () => void;
 
}

export const Botao = ({ name, onClick }: BotaoProps) => {
  return (
    <>
        <Buttom onClick={onClick}>{name}</Buttom>
    </>
  );
};