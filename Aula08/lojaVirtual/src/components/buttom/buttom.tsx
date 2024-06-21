import {Buttom} from "./styles.ts";


interface BotaoProps {
  name: string;
}

export const Botao = ({ name }: BotaoProps) => {
  return (
    <>
        <Buttom>{name}</Buttom>
    </>
  );
};

 ;
