// import { useState , useContext, Context } from "react";
// import ProductCard from "../productCard";
// import { CarrinhoContext } from "./context";

// interface CartItem{
//   name: string;
//   image: string;
//   price: number;
//   quantify: number;
// }

// const CartItem = () => {
//   const [cartItems, setCartItems] = useContext<CartItem[]>(CarrinhoContext);
//   const [count, setCount] = useState(1);

//   const handleAddToCart = (item: CartItem) => {
//     setCartItems([...cartItems, { ...item, quantify: count }]);
//     setCount(count)
//   }

//   const increaseQuantify = (index: number) => {
//     setCartItems(
//       cartItems.map((item, i) => i === index ? { ...item, quantify: item.quantify + 1 } : item)
//     )
//   }

//   const decreaseQuantify = (index: number) => {
//     setCartItems(
//       cartItems.map((item, i) => i === index ? { ...item, quantify: item.quantify - 1 } : item)
//     )
//   }

//   const removeItem = (index: number) => {
//     setCartItems(
//       cartItems.filter((_, i) => i !== index)
//     )
//   }

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantify, 0)

//   return (
//     <div>
//       {cartItems.length === 0 ? (
//         <p>Seu carrinho esta vazio</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <ProductCard
//             key={index}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//             quantify={item.quantify}
//             onAddToCart={() => handleAddToCart(item)}
//             onIncreaseQuantify={() => increaseQuantify(index)}
//             onDecreaseQuantify={() => decreaseQuantify(index)}
//             onRemoveItem={() => removeItem(index)}
//           />
//         ))
      
//       )}
//      <div>
//         <h2>Total:R${totalPrice.toFixed(2)}</h2>
//       </div>
//     </div>
//   );
// };

// export default CartItem

// function UseContext<T>(CarrinhoContext: Context<CartItem[]>): [any, any] {
//   throw new Error("Function not implemented.");
// }
