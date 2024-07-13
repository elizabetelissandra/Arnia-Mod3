export interface ProductItemProps {
    openModal: (item: any) => void;
    newPrice: string | number | null;
    product: {
      id: number;
      name: string;
      description: string;
      price: number;
      quantity: number;
      type: string
      isDrink: boolean
      isFood: boolean
      isCleaningProduct: boolean
    };
    Remover: (quantity: number) => void;
  }