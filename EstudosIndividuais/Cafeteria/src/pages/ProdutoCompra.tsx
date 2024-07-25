import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../types/Products";
import { ProductCompraProps } from "../types/ProdutoCompraProps";
import CircularDeterminate from "../components/MaterialUI/Loading";
import LinearColor from "../components/MaterialUI/Loading";
import {
  DivHeader,
  Botao,
  BotaoCarrinho,
  Div,
  DivBotoes,
  DivCarrinho,
  DivProduto,
  DivSelecao,
  Img,
  PBotoes,
  PDescription,
  SpanCategory,
  SpanNome,
} from "../styles/ProdutoCompra";
import Counter from "../components/Counter";
import dataJ from "";

const ProdutoCompra = () => {
  const [productSelected, setProductSelected] = useState<ProductCompraProps | null>(
  null
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await fetch(`/data.json`);
      const data = await response.json();
      console.log(data);
      const selectedProduct = data.cafes.find(
        (product: Product) => product.id === Number(id)
      );
      setProductSelected(selectedProduct);
    };
    fetchData();
  }, [id]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
   
  };

  const selectPrice = () => {
    if (!productSelected || !selectedSize) return;
    return productSelected.sizes.find(
      (sizeDetail) => sizeDetail.size === selectedSize
    )?.price;
  };

  if (!productSelected)
    return (
      <div>
        <LinearColor />
      </div>
    );
  return (
    <>
      <DivProduto>
        <DivHeader>
          <Div key={id}>
            <SpanCategory>{productSelected.category}</SpanCategory>
            <SpanNome>{productSelected.name}</SpanNome>
            <PDescription>{productSelected.description}</PDescription>
            <PDescription>R${selectPrice()}</PDescription>
          </Div>
        </DivHeader>
        <Img src={productSelected.image} alt={productSelected.name}></Img>
      </DivProduto>
      <Div></Div>
      <div>
        <PBotoes>Selecione o tamanho:</PBotoes>
        <DivBotoes>
          {productSelected.sizes.map((sizeDetail) => (
            <Botao key={sizeDetail.id} onClick={() => handleSizeChange(sizeDetail.size)}>{sizeDetail.size}</Botao>
          
          ))}
          </DivBotoes>
            <DivCarrinho>

          <Counter selectPrice={selectPrice()} />
          <BotaoCarrinho>Adicionar ao carrinho</BotaoCarrinho>
        </DivCarrinho>
      </div>
    </>
  );
};

export default ProdutoCompra;
