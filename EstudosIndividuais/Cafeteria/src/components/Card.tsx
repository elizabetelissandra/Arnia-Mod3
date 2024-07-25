import { useEffect, useState } from "react";
import {  Product } from "../types/Products";
import {
  CardStyled,
  DivFlex,
  ImgCafes,
  SpanCategory,
  SpanDescription,
  SpanNome,
  SpanPrice,
  StanSigla,
} from "../styles/CardStyles";

const Card = () => {
  const [products, setProducts] = useState<Product[]>([]);


  const getRandomItems = (items: any[], count: number) => {
    const randomItems = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      randomItems.push(items[randomIndex]);
      items.splice(randomIndex, 1);
    }
    return randomItems;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      console.log(data);
      setProducts(data.cafes);
      const randomItems = getRandomItems(data.cafes, 3);
      console.log(randomItems);
      setProducts(randomItems);
    };
    fetchData();
  }, []);
  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <DivFlex>
        {products.map((product) => (
          <CardStyled key={product.id} >
            <ImgCafes src={product.image} alt={product.name} />
            <SpanCategory>{product.category}</SpanCategory>
            <SpanNome>{product.name}</SpanNome>
            <SpanDescription>{product.description}</SpanDescription>
            <StanSigla>
              R$
              <SpanPrice>
                {product.sizes.find((size: any) => size.size === "227ml")?.price}
              </SpanPrice>
            </StanSigla>
          </CardStyled>
        ))}
      </DivFlex>
    </>
  );
};

export default Card;
