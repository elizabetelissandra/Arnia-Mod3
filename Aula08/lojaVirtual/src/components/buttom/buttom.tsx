import {Buttom} from "./styles.ts";


interface Botaozinho {
  name: string;
}

const Botao = ({ name }: Botaozinho) => {
  return (
    <>
        <Buttom>Ir para o {name}</Buttom>
    </>
  );
};

export default Botao;
