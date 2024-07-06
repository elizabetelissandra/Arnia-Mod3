export interface ProductListProps {
        products: {
            name: string;
            description: string;
            price: number;
            quantity: number;
            type: string
            isDrink: boolean
            isFood: boolean
            isCleaningProduct: boolean
        }[];
        Remover: () => void;
        addProduct: (product: any) => void
    }