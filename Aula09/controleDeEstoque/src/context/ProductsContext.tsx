// src/context/ProductContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  type: string;
  isDrink: boolean;
  isFood: boolean;
  isCleaningProduct: boolean;
  drink: number;
  food: number;
  cleaning: number;
  productByType: ProductByType
}

interface ProductByType {
  drink: number;
  food: number;
  cleaning: number;
}

interface ProductContextType {
  totalProducts: number;
  totalValue: number;
  productByTypes: ProductByType
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productByType, setProductByType] = useState<ProductByType>({
    drink: 0,
    food: 0,
    cleaning: 0
  })

  useEffect(() => {
    /* Para chamar a API e pegar os dados */
    fetch("../../data.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  const totalProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const totalValue = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const productByTypes = products.reduce<{ drink: number; food: number; cleaning: number }>((acc, product) => {
    if (product.isDrink) {
      acc.drink +=  product.quantity;
    } else if (product.isFood) {
      acc.food +=  product.quantity;
    } else if (product.isCleaningProduct) {
      acc.cleaning +=  product.quantity;
    }
    return acc;
  }, { drink: 0, food: 0, cleaning: 0 });

  
  return (
    <ProductContext.Provider
      value={{ totalProducts, totalValue, productByTypes }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
