import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";
import {
  Container,
  DivList,
  InputSearch,
  List,
  Title,
} from "../styles/ProductListStyles";
import Swal from "sweetalert2";

export interface ProductListProps {
  addProduct: (product: {
    name: string;
    description: string;
    price: number;
    quantity: number;
  }) => void;
  Remover: () => void;
}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<
    { name: string; description: string; price: number; quantity: number }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProduct = (product: {
    name: string;
    description: string;
    price: number;
    quantity: number;
  }) => {
    setProducts([...products, product]);
  };

  const handleRemoveProduct = (index: number) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não pode reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, apague!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter((_, i) => i !== index));
        Swal.fire({
          title: "Deletado!",
          text: "Seu item foi deletado.",
          icon: "success",
        });
      }
    });
  };

    const filteredProducts = products.filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
    
  return (
    <Container>
      <Title>Controle de Estoque</Title>
      <ProductForm addProduct={handleAddProduct} />
      <DivList>
        <InputSearch
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value= {searchTerm}
        placeholder="Pesquisar" />
        <List>
          {filteredProducts.map((product, index) => (
            <ProductItem
              Remover={() => handleRemoveProduct(index)}
              product={product}
              newPrice={product.price}
            />
          ))}
        </List>
      </DivList>
    </Container>
  );
};

export default ProductList;
