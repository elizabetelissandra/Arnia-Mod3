import { useState } from "react";
import Header from "../components/header";
import ProductList from "../components/productList";
import Footer from "../components/footer";


import { ProductHeader } from "../components/header/productHeader.tsx"
import { Botao } from "../components/buttom/buttom.tsx";
import { Div } from "./styles1.ts";

interface ProductsPageProps {
    goToCart: () => void;
  }

    const ProductsPage: React.FC<ProductsPageProps>= ({goToCart})  => {
    const [cartCount, setCartCount] = useState<number>(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="app">
            <Header />
            <ProductHeader name="Produtos" cartCount={cartCount} />
            <ProductList 
                onAddToCart={handleAddToCart}
                cartCount={cartCount}         />
        <Div>
            <></>
            <Botao onClick={goToCart} name={"Ir para carrinho"} />
        </Div>
        <Footer/>
        </div>
    );
};

export default ProductsPage;