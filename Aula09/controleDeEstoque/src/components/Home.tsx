import {
  HomeStyled,
  Nav,
  Ul,
  Li,
  Title,
  Description,
  Summary,
  SummaryTitle,
  SummaryItem,
  LinkStyled,
} from "../styles/HomeStyles";
import { useProductContext } from "../context/ProductsContext";

const Home = () => {
  const { totalProducts, totalValue, productByTypes } = useProductContext();

  // Supondo que você tenha uma função para obter o resumo do estoque



  return (
    <HomeStyled>
      <Title>Home</Title>
      <Description>
        Bem-vindo ao sistema de controle de estoque! Aqui você pode gerenciar
        seus produtos, verificar quantidades disponíveis e acompanhar o valor
        total do estoque.
      </Description>
      <Nav>
        <Ul>
          <Li>
            <LinkStyled to="/app">Controle de estoque</LinkStyled>
          </Li>
          <Li>
            <LinkStyled to="/sobre">Sobre</LinkStyled>
          </Li>
        </Ul>
      </Nav>
      <Summary>
        <SummaryTitle>Resumo do Estoque</SummaryTitle>
        <SummaryItem>Total de Produtos: {totalProducts}</SummaryItem>
        <SummaryItem>
          Total de Categorias:
          <ul>
            <li>Bebidas: {productByTypes.drink}</li>
            <li>Comidas: {productByTypes.food}</li>
            <li>Limpeza: {productByTypes.cleaning}</li>
          </ul>
        </SummaryItem>
        <SummaryItem>Valor Total do Estoque: {totalValue} moedas</SummaryItem>
      </Summary>
    </HomeStyled>
  );
};

export default Home;
