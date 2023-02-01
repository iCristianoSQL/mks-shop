export interface ICartCard {
    photo: string;
    name: string;
    price: string;
    quantity: number;
    handleRemove: () => void;
    handleIncrementQuantity: () => void;
    hadnelDecrementQuantity: () => void;
}