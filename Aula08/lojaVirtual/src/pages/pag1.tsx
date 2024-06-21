import { useState } from "react";
import Header from "../components/header";
import ProductList from "../components/productList";
import Footer from "../components/footer";
import {Div} from './styles1.ts'
import {Botao} from "../components/buttom/buttom.tsx";

import { ProductHeader } from "../components/header/productHeader.tsx"



const Page1 = () => {
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
            cartCount={cartCount}
            />
            <Div>
            <></>
            <Botao name={"Ir para carrinho"} />
            </Div>
            <Footer/>
        </div>
    );
};

export default Page1;