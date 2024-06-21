import { ProductHeaderStyled } from "./productHeader";

export const ProductHeader = ({ cartCount, name }: any) => {

    return (

    <ProductHeaderStyled className="product-header">
        <div className="logo">
        <h2>{name}</h2>
        <div className="cart-count">{cartCount}</div>
        </div>
    </ProductHeaderStyled>
    );
}

