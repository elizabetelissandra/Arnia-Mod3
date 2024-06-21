import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { ProductHeader } from "../components/header/productHeader.tsx"
import { Botao } from "../components/buttom/buttom.tsx";
import {ListCart} from "../components/productList/listCart.tsx";
import Products from "../components/productList/gamesCart.tsx";




interface Product{
    map: any;
    id: number
    title: string
    price: number
    image: string
    platform: string
}

    interface CartItem{
        product: Product;
        quantify: number;
    }



const Page2: React.FC<CartItem> = ()  => {


    return (
        <div className="app">
            <Header />
            <ProductHeader name="Carrinho" />
            <ListCart product={Products} quantity={1}/>
            <Botao name={"Ir para Checkout"}  />
            <Footer />
        </div>
    );
};


export default Page2;