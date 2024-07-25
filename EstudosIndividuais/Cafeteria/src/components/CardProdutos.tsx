import { Link } from "react-router-dom";
import {
  DivCard,
  DivFlex,
  H3Name,
  LinkStyled,
  PDescription,
  PPrice,
  SpanPrice,
} from "../styles/CardProdutosStyles";
import { CardProdutosProps } from "../types/CardProdutosProps";

const CardProdutos = ({ renderCafesByCategory }: CardProdutosProps) => {
  return (
    <DivFlex>
      {renderCafesByCategory("Tradicionais").map((products) => (
        <LinkStyled to={`/produto/${products.id}`} key={products.id}>
        <DivCard >
          <div>
            <img src={products.image} alt={products.name} />
          </div>
          <div>
            <H3Name>{products.name}</H3Name>
            <PDescription>{products.description}</PDescription>
            <PPrice>
              R${" "}
              <SpanPrice>
                {
                  products.sizes.find((size: any) => size.size === "227ml")
                    ?.price
                }
              </SpanPrice>
            </PPrice>
          </div>
        </DivCard>
       </LinkStyled>
      ))}
    </DivFlex>
  );
};

export default CardProdutos;
