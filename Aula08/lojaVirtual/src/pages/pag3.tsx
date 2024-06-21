import Header from "../components/header";
import Footer from "../components/footer";
import './pag2.css'
import React from "react";
import { Botao } from "../components/buttom/buttom";
// import CartItem from "../components/cart/item";

interface Props{
}

const Page3: React.FC<Props> = () => {

    return (
        <div className="app">
            <Header />
            <Botao name={"Finalizar Compra"} />
            <Footer />
        </div>
    );
};

export default Page3;