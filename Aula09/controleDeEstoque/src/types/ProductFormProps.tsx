export interface ProductFormProps {
    addProduct: (produto: {
      name: string;
      description: string;
      price: number;
      quantity: number;
      isDrink: boolean;
      isFood: boolean;
      isCleaningProduct: boolean;
    }) => void;
  }

