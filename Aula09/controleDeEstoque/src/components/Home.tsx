import { Link } from "react-router-dom";
import { HomeStyled, Nav, Ul, Li, Title, Description, Summary, SummaryTitle, SummaryItem } from "../styles/HomeStyles";

const Home = () => {
  // Supondo que você tenha uma função para obter o resumo do estoque
  const totalProducts = 50; // Exemplo
  const totalCategories = 3; // Exemplo
  const totalValue = 500; // Exemplo
  return (
      <HomeStyled>
        <Title>Controle de estoque</Title>
        <Description>
        Bem-vindo ao sistema de controle de estoque! Aqui você pode gerenciar seus produtos, verificar quantidades disponíveis e acompanhar o valor total do estoque.
      </Description>
        <Nav>
          <Ul>
            <Li>
              <Link to="/app">Controle de estoque</Link>
            </Li>
            <Li>
              <Link to="/sobre">Sobre</Link>
            </Li>
          </Ul>
        </Nav>
        <Summary>
        <SummaryTitle>Resumo do Estoque</SummaryTitle>
        <SummaryItem>Total de Produtos: {totalProducts}</SummaryItem>
        <SummaryItem>Total de Categorias: {totalCategories}</SummaryItem>
        <SummaryItem>Valor Total do Estoque: {totalValue} moedas</SummaryItem>
      </Summary>
      </HomeStyled>
  );
};

export default Home;
