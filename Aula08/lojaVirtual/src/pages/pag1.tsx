import { useState } from "react";
import Header from "../components/header";
import ProductList from "../components/productList";
import Footer from "../components/footer";
import './pag1.css'

const Page1 = () => {
    const [cartCount, setCartCount] = useState<number>(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="app">
            <Header />
            <ProductList onAddToCart={handleAddToCart} cartCount={cartCount}  />
            <Footer/>
        </div>
    );
};

export default Page1;