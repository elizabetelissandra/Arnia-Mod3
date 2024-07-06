import { useState } from "react";
import {
  BoxInput,
  Button,
  Container,
  Form,
  Input,
  Label,
  LabelCheckbox,
} from "../styles/ProductFormStyles";
import { ProductFormProps } from "../types/ProductFormProps";
import { useTheme } from "../context/ThemeContext";

const ProductForm = ({ addProduct }: ProductFormProps) => {
  const [produto, setProduto] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    isDrink: false,
    isFood: false,
    isCleaningProduct: false,
  });
  const handleChange = (e: any) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
    if (e.target.type === "checkbox") {
      setProduto({ ...produto, [e.target.name]: e.target.checked });
    } else {
      setProduto({ ...produto, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct: any = {
      ...produto,
    };
    addProduct(newProduct);
    console.log(newProduct);
    setProduto({
      name: "",
      description: "",
      price: "",
      quantity: "",
      isDrink: false,
      isFood: false,
      isCleaningProduct: false,
    });
  };

  const {theme} = useTheme()

  return (
    <Container theme={theme}>
      <Form theme={theme} onSubmit={handleSubmit}>
        <Label theme={theme} htmlFor="name">
          Nome:
          <Input
            onChange={handleChange}
            value={produto.name}
            type="text"
            name="name"
            placeholder="Adicione um produto"
            required
          />
        </Label>
        <Label theme={theme} htmlFor="descricao">
          Descrição:
          <Input
            onChange={handleChange}
            value={produto.description}
            type="text"
            name="description"
            placeholder="Adicione uma descricao"
            required
          />
        </Label>
        <Label theme={theme} htmlFor="price">
          Preço:
          <Input
            onChange={handleChange}
            value={produto.price}
            type="number"
            name="price"
            placeholder="Adicione um preço"
            required
          />
        </Label>
        <Label theme={theme} htmlFor="quantity">
          Quantidade:
          <Input
            onChange={handleChange}
            value={produto.quantity}
            type="number"
            name="quantity"
            placeholder="Adicione uma quantidade"
            required
          />
        </Label>
        <LabelCheckbox theme={theme} htmlFor="isDrink">
          Selecione o tipo de produto:
          <BoxInput>
            É bebida?
            <input
              type="checkbox"
              name="isDrink"
              checked={produto.isDrink}
              onChange={handleChange}
            />
            É comida?
            <input
              type="checkbox"
              name="isFood"
              checked={produto.isFood}
              onChange={handleChange}
            />
            É limpeza?
            <input
              type="checkbox"
              name="isCleaningProduct"
              checked={produto.isCleaningProduct}
              onChange={handleChange}
            />
          </BoxInput>
        </LabelCheckbox>
        <Button theme={theme} type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
