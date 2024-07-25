export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  sizes: {
    size: string;
    price: number;
    }
  image: string;
}[];
export interface Filtered{
  filteredProducts: Product[]
}
