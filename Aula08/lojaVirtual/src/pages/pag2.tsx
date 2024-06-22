import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { ProductHeader } from "../components/header/productHeader.tsx"
import { Botao } from "../components/buttom/buttom.tsx";

import ListCart from "../components/productList/listCart.tsx";

import Products from "../components/productList/gamesCart.tsx";


interface CartPageProps {
    goToCheckout: () => void;
  }

  const CartPage: React.FC<CartPageProps> = ({  goToCheckout }) => {

    return (
        <div>
          <Header />
          <ProductHeader name="Carrinho" cartCount={2}/>
          <ListCart cart={Products} goToCheckout={goToCheckout} />
          <Footer />
        </div>
      );
    };



export default CartPage;