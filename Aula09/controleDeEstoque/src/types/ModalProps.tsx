export interface ModalProps{
    show: boolean;
    onClose: () => void;
    onConfirmRemove: () => void;
    products: {
        id: number
        name: string;
        description: string;
        price: number;
        quantity: number;
        type: string
        isDrink: boolean
        isFood: boolean
        isCleaningProduct: boolean
    }[]
    itemToRemove: number | null
    handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>, productId: number) => void
    quantity: number
}