import ProductCard from "../productCard";
import "./styles.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  cartCount: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Battlefield",
    price: 9.99,
    image:
      "https://a-static.mlcdn.com.br/800x560/battlefield-2042-ps4-electronic-arts/hobimaimportingnews2/13305610799/8d9a2e9b3890ec8423af29ad1f517689.jpeg",
  },
  {
    id: 2,
    name: "Call of Duty",
    price: 19.99,
    image:
      "https://a-static.mlcdn.com.br/800x560/call-of-duty-modern-warfare-ii-ps5-sony/bluewavesgame/18102053/c13830d5c166cf33aafe10089fd841b5.jpeg",
  },
  {
    id: 3,
    name: "Fortnite",
    price: 29.99,
    image:
      "https://www.mobygames.com/images/covers/l/477922-fortnite-battle-royale-xbox-one-front-cover.png",
  },
  {
    id: 4,
    name: "GTA VI",
    price: 39.99,
    image:
      "https://th.bing.com/th/id/OIP.63PT_Kes79Zzl3XP4_vh8gHaNK?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Minecraft",
    price: 49.99,
    image: "https://http2.mlstatic.com/S_335425-MCO25445557317_032017-O.jpg",
  },
  {
    id: 6,
    name: "PUBG",
    price: 59.99,
    image:
      "https://image.jeuxvideo.com/medias/154385/1543848944-4480-jaquette-avant.jpg",
  },
  {
    id: 7,
    name: "Rocket League",
    price: 69.99,
    image:
      "https://cdn.shopify.com/s/files/1/2700/1230/products/ps4_ROCKET_LEAGUE_ULTIMATE_EDITION_1024x1024.png?v=1538580316",
  },
];

interface ProductListProps {
  onAddToCart: () => void;
  cartCount: number;
}

const ProductList: React.FC<ProductListProps> = ({
  onAddToCart,
  cartCount,
}) => {
  return (
    <div className="products">
      <div className="product-header">
        <h2>Produtos</h2>
        <div className="cart-count">{cartCount}</div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <button className="checkout-button">Ir para o Carrinho </button>
    </div>
  );
};

export default ProductList;
