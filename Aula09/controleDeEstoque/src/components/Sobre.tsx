import { Link } from "react-router-dom";

import { SobreStyled, Title, P, Ul } from "../styles/SobreStyles.ts";
import { BotaoTheme, DivSaldoEBotao } from "../styles/ProductListStyles.ts";

const Sobre = () => {
  return (
    <SobreStyled>
      <Title>Sobre</Title>
      <P>Controle de estoque</P>
      <Ul>
        <li>Versão 1.0 -
        Desenvolvido por{" "}
        <Link to="https://github.com/elizabetelissandra">
          Elizabete Lissandra
        </Link>
        </li>
      </Ul>
      <P>Retornar ao <Link to="/home">inicio</Link></P>
    </SobreStyled>
  );
};

export default Sobre;
