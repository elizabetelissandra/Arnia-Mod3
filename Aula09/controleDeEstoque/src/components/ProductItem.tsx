import { useState } from "react";
import {
  Box,
  ButtonQuantidades,
  ButtonRemover,
  Item,
  Paragraph,
  Quantidades
} from "../styles/ProductItemStyles";
import { DivPreco } from "../styles/ProductListStyles";
import { ProductItemProps } from "../types/ProductItemProps";
import { useTheme } from "../context/ThemeContext";


const ProductItem = ({ product, openModal }: ProductItemProps) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [price, setPrice] = useState(product.price);
  



  const addToCart = () => {
    setQuantity(q => Number(q) + 1);
    if (quantity < 5) {
      return window.alert("Quantidade baixa de itens");
  };
}

  const removeFromCart = () => {
    setQuantity(q => Number(q) - 1);
    if (quantity < 5) {
      return window.alert("Quantidade baixa de itens");
    }
  };

  const handleEditPrice = () => {
    const newPrice = prompt("Digite o novo preço:");
    const numericPrice = parseFloat(newPrice || "");
    if (!isNaN(numericPrice)) {
      setPrice(numericPrice);
    } else {
      alert("Preço inválido");
    }
  };


    if(product.isDrink){
      product.type = "Bebida";
    }
    if(product.isFood){
      product.type = "Comida";
    }
    if(product.isCleaningProduct){
      product.type = "Limpeza";
    }
  
    const {theme} = useTheme()
  
  return (
    <Item>
      <Box theme={theme}>
        <Paragraph>Nome: {product.name}</Paragraph>
        <Paragraph>Descrição: {product.description}</Paragraph>
        <Paragraph>Tipo: {product.type}</Paragraph>
        <DivPreco>
          <Paragraph>Preço: R${price}</Paragraph>
          <ButtonQuantidades theme={theme} onClick={handleEditPrice}>
            Editar
          </ButtonQuantidades>
        </DivPreco>
        <Quantidades>
          <ButtonQuantidades theme={theme} onClick={removeFromCart}>-</ButtonQuantidades> 
          <Paragraph>Quantidade:{quantity}</Paragraph>
          <ButtonQuantidades theme={theme} onClick={addToCart} >+</ButtonQuantidades>
        </Quantidades>
        <Paragraph>Total: R${product.price * quantity}</Paragraph>
        <ButtonRemover theme={theme} onClick={() => openModal(product.id)}>Remover</ButtonRemover>
      </Box>
    </Item>
  );
};

export default ProductItem;
