import { useState } from "react"
import ProductForm from "./ProductForm"
import ProductItem from "./ProductItem"
import { Container, DivList, List, Title } from "../styles/ProductListStyles";
import Swal from 'sweetalert2'


export interface ProductListProps {
    addProduct: (product: { name: string; price: number; quantity: number }) => void;
    Remover: () => void
}
const ProductList:React.FC<ProductListProps> = () => {
    const [products, setProducts] = useState<{ name: string; price: number; quantity: number }[]>([])

    const handleAddProduct = (product: { name: string; price: number; quantity: number }) => {
        setProducts([...products, product])
    }

    const handleRemoveProduct = (index: number) => {

        Swal.fire({
            title: "Tem certeza?",
            text: "Você não pode reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, apague!"
          }).then((result) => {
            if (result.isConfirmed) {
            setProducts(products.filter((_, i) => i !== index))
              Swal.fire({
                title: "Deletado!",
                text: "Seu item foi deletado.",
                icon: "success"
              });
            }
          });
    }

    return (
        <Container>
            <Title>Controle de Estoque</Title>
            <ProductForm addProduct={handleAddProduct}/>
            <DivList>
            <List>
                {products.map((product, index) => (
                    <ProductItem Remover={() => handleRemoveProduct(index)} product={product}/>
                ))}
            </List>
            </DivList>
        </Container>
    )
}

export default ProductList