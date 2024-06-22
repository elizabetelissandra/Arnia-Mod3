
import { ProductHeaderStyled, H2 } from "./productHeader";
export const ProductHeader = ({ cartCount, name }: any) => {
  return (
    <div>
      <ProductHeaderStyled>
        <H2>{name}</H2>
        <div className="cart-count">{cartCount}</div>
      </ProductHeaderStyled>
    </div>
  );
};

