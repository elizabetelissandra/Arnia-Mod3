import { FaCartShopping } from "react-icons/fa6";
import "./styles.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <p className="product-price">
            <span className="label">Valor</span>: R${product.price}
          </p>
          <button className="add-to-cart-button" onClick={() => onAddToCart()}>
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
