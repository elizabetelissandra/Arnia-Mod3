import React from 'react';
import Products from './gamesCart';

interface Product
 {
  id: number;
  title: string;
  price: number;
  image: string;
  platform: string;

}



interface CartItem {
  product: Product;
  quantity: number;

}

export const ListCart: React.FC<CartItem> = ({ quantity}) => {
  
    return (
        <main>
        <ul>
          {Products.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>R$ {item.price},00 x {quantity}</p>
            </li>
          ))}
        </ul>

        <p>Total: R$ {Products.reduce((acc, item) => acc + item.price * quantity, 0)},00</p>
    </main>
)
}

