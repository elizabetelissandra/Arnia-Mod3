import { useState } from "react";
import { Button, Container, Form, Input, Label } from "../styles/ProductFormStyles";

export interface ProductFormProps {
    addProduct: (produto: { name: string; description: string; price: number; quantity: number }) => void;
}

const ProductForm = ({addProduct}: ProductFormProps) => {
    const [produto, setProduto] = useState({
        name: '',
        description: '',
        price: 0,
        quantity: 0
    })
    const handleChange = (e: any) => {
        setProduto({
            ...produto, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newProduct = {
            ...produto
        }
        addProduct(newProduct)
        console.log(newProduct)
        setProduto({
            name: '',
            description: '',
            price: 0,
            quantity: 0
        })
     
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Nome:
          <Input onChange={handleChange} value={produto.name} type="text" name="name" placeholder="Adicione um produto" required/>
        </Label>
        <Label htmlFor="descricao">
          Descrição:
          <Input onChange={handleChange} value={produto.description} type="text" name="description" placeholder="Adicione uma descricao" required/>
        </Label>
        <Label htmlFor="price">
          Preço:
          <Input onChange={handleChange} value={produto.price} type="number" name="price" placeholder="Adicione um preço" required/>
        </Label>
        <Label htmlFor="quantity">
          Quantidade:
          <Input onChange={handleChange} value={produto.quantity} type="number" name="quantity" placeholder="Adicione uma quantidade" required/>
        </Label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
