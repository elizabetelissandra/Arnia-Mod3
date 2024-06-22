import React, { useState } from "react";
import Products from "./gamesCart";
import "./listCartStyle.css";
import { Botao } from "../buttom/buttom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  cartCount: number;
}
interface CartPageProps {
  cart: any;
  goToCheckout: () => void;
}

const ListCart: React.FC<CartPageProps> = ({ cart, goToCheckout }) => {
  const [count, setCount] = useState(1);

  const addToCart = () => {
    setCount(count + 1);
  };

  const removeFromCart = () => {
    setCount(count - 1);
  };

  return (
    <div className="list-cart">
      <ul>
      <div className="list">
        {cart.map((item: any) => (
          
          <li key={item.id}>
            <div className="product">
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>
                R$ {item.price},00 x {count}
              </p>
              <div className="buttom">
                <Botao onClick={addToCart} name={"+"}/>
                <Botao onClick={removeFromCart} name={"-"}/>
              </div>
            </div>
            </div>
          </li>
          
        ))}
       </div>
      </ul>
      <div className="total">
      <p>
        Total: R$ {Products[0].price * count + Products[1].price * count},00
      </p>
      <Botao onClick={goToCheckout} name={"Finalizar Compra"}/>
      </div>    
      </div>
  );
};

export default ListCart;
