export interface ProductItemProps {
    Remover: () => void;
    newPrice: string | number | null;
    product: {
      name: string;
      description: string;
      price: number;
      quantity: number;
      isDrink: false,
     isFood: false,
    isCleaningProduct: false,
    };
  }