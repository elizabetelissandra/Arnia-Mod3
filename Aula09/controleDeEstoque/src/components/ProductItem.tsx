import { useState } from "react";
import { Box, ButtonQuantidades, ButtonRemover, Item, Paragraph, Quantidades } from "../styles/ProductItemStyles";

export interface ProductItemProps {
  Remover: () => void;
  product: { name: string; description: string; price: number; quantity: number };
}
const ProductItem = ({ Remover, product }: ProductItemProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const addToCart = () => {
    setQuantity((q) => q + 1);
    if(quantity < 5) {
      return window.alert("Quantidade baixa de itens")
    }
  };

  const handleClick = () => {
    
  };

  const removeFromCart = () => {
    if(quantity === 0) return 
    setQuantity((q) => q - 1);
    if(quantity < 5) {
      return window.alert("Quantidade baixa de itens")
    }
  };


  return (
    <Item>
      <Box>
        <Paragraph>Nome: {product.name}</Paragraph>
        <Paragraph>Descrição: {product.description}</Paragraph>
        <Paragraph>Preço: {product.price}</Paragraph> 
        <Quantidades>
        <ButtonQuantidades onClick={removeFromCart}>-</ButtonQuantidades>
        <Paragraph>Quantidade:{quantity}</Paragraph>
        <ButtonQuantidades onClick={addToCart}>+</ButtonQuantidades>
        </Quantidades>
        <Paragraph>Total: {product.price * quantity}</Paragraph>
        <ButtonRemover onClick={Remover}>Remover</ButtonRemover>
      </Box>
    </Item>
  );
};

export default ProductItem;
