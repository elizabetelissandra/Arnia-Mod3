import { SobreStyled, Title, P, Ul, LinkStyled } from "../styles/SobreStyles.ts";



const Sobre = () => {
  return (
    <SobreStyled>
      <Title>Sobre</Title>
      <P>Controle de estoque</P>
      <Ul>
        <li>Versão 1.0 -
        Desenvolvido por{" "}
        <LinkStyled to="https://github.com/elizabetelissandra">
          Elizabete Lissandra
        </LinkStyled>
        </li>
      </Ul>
      <P>Retornar ao <LinkStyled to="/">home</LinkStyled></P>
    </SobreStyled>
  );
};

export default Sobre;
