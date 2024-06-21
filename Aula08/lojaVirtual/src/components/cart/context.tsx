// import { createContext, useState } from "react";

// interface CartItem{
//     name: string;
//     image: string;
//     price: number;
//     quantify: number;
//   }
  
//   const CarrinhoContext = createContext<CartItem[]>([])
  
//   const CarrinhoProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
//     return (
//       <CarrinhoContext.Provider value={{cartItems, setCartItems}}>
//         {children}
//       </CarrinhoContext.Provider>
//     )
//   }

//   export {CarrinhoContext, CarrinhoProvider}