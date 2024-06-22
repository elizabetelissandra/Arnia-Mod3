import React from "react";
import Header from "../components/header";
import { Botao } from "../components/buttom/buttom";
import Footer from "../components/footer";
import Products from "../components/productList/gamesCart";
import { ProductHeader } from "../components/header/productHeader.tsx";
import { Container, Div, DivBotao, DivImg, InfoProduto } from "./styles3.ts";

interface CheckoutPageProps {
  confirmPurchase: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ confirmPurchase }) => {
  return (
    <div>
      <Header />
      <ProductHeader name="Checkout" cartCount={false} />
      <Div>
        <ul>
          <Container>
            <InfoProduto>Produtos Escolhidos:</InfoProduto>
          </Container>
          <DivImg>
            {Products.map((item: any) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
              </li>
            ))}
          </DivImg>
        </ul>
        <Container>
          <InfoProduto>Total Produtos: 2</InfoProduto>
          <InfoProduto>Total: R$ 20,00</InfoProduto>
        </Container>
      </Div>
      <DivBotao>
        <Botao name={"Confirmar Compra"} onClick={confirmPurchase} />
      </DivBotao>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
