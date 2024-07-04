import { useState } from "react";
import {
  Box,
  ButtonQuantidades,
  ButtonRemover,
  Item,
  Paragraph,
  Quantidades,
  Tipos,
} from "../styles/ProductItemStyles";
import { DivPreco } from "../styles/ProductListStyles";
import { ProductItemProps } from "../types/ProductItemProps";


const ProductItem = ({ Remover, product }: ProductItemProps) => {
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


  return (
    <Item>
      <Box>
        <Paragraph>Nome: {product.name}</Paragraph>
        <Paragraph>Descrição: {product.description}</Paragraph>
        <Tipos>
        <Paragraph>É produto de Limpeza? - {product.isCleaningProduct ? 'Sim' : 'Não'}
        </Paragraph>
        <Paragraph>É bebida? - {product.isDrink ? 'Sim' : 'Não'}</Paragraph>
        <Paragraph>É comida? - {product.isFood ? 'Sim' : 'Não'}</Paragraph>
        </Tipos>
        <DivPreco>
          <Paragraph>Preço: R${price}</Paragraph>
          <ButtonQuantidades onClick={handleEditPrice}>
            Editar
          </ButtonQuantidades>
        </DivPreco>
        <Quantidades>
          <ButtonQuantidades onClick={removeFromCart}>-</ButtonQuantidades> 
          <Paragraph>Quantidade:{quantity}</Paragraph>
          <ButtonQuantidades onClick={addToCart} >+</ButtonQuantidades>
        </Quantidades>
        <Paragraph>Total: R${product.price * quantity}</Paragraph>
        <ButtonRemover onClick={Remover}>Remover</ButtonRemover>
      </Box>
    </Item>
  );
};

export default ProductItem;
