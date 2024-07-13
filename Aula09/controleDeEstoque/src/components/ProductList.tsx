import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";
import {
  Container,
  InputSearch,
  List,
  Select,
  Title,
  Option,
  DivFiltros,
  BotaoTheme,
  DivCategorias,
  H3Categorias,
  DivCategorias2,
  DivSaldo,
  DivSaldoEBotao,
  DivCarteira,
} from "../styles/ProductListStyles";
import Modal from "./Modal";
import { useTheme } from "../context/ThemeContext";
import modoNoturno from "../img/modo-noturno.png";
import modoClaro from "../img/sol.png";
import React from "react";

const ProductList = () => {
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      description: string;
      price: number;
      quantity: number;
      type: string;
      isDrink: boolean;
      isFood: boolean;
      isCleaningProduct: boolean;
    }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);
  const [productType, setProductType] = useState("");
  const [productTotal, setProductTotal] = useState({});
  const [wallet, setWallet] = useState(100);
  const [quantity, setQuantity] = useState(1);

  let id = 4;
  const handleAddProduct = (product: {
    name: string;
    description: string;
    price: number;
    quantity: number;
    type: string;
    isDrink: boolean;
    isFood: boolean;
    isCleaningProduct: boolean;
  }) => {
    const newProduct = {
      ...product,
      id: id++,
      type: product.isFood ? "Comida" : product.isDrink ? "Bebida" : "Limpeza",
    };
    setProducts([...products, newProduct]);
    setWallet(wallet - newProduct.price);
  };

  useEffect(() => {
    /* Para chamar a API e pegar os dados */
    fetch("../../data.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  const openModal = (item: number) => {
    setItemToRemove(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, productId: number) => {
    const newQuantity = Number(event.target.value);
    const produtos = products.find((product) => {
     if( product.id === productId){
      return product}
    })
    if (newQuantity <= 0) {
      setQuantity(1);
    } else if (newQuantity > produtos.quantity) {
      setQuantity(produtos.quantity);
    } else {
      setQuantity(newQuantity);
    }
  };

  // useEffect(() => {
   
  // }, []);

  const handleSellProduct = (productId: number) => {
    /* Criada para vender os itens e limitar o lucro em 20% */
    const productSell = products.find((product) => product.id === productId);
    if (!productSell) return;

    const quantityAvailable = productSell.quantity;
    const lucroLimit = productSell.price * 0.2;
    const valorVenda = productSell.price + lucroLimit;

      if (Math.random() < 0.5) {
        setWallet(wallet + (valorVenda * quantityAvailable));
      } else {
        setProducts(products.filter((product) => product.id !== itemToRemove));
      }


    const newQuantity = quantityAvailable - quantity;
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );

    
  };

  const filteredProducts = products.filter(
    /* Aqui será filtrado tanto pela barra de pesquisa, quanto pelo select */
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (product.type === productType || productType === "")
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductType(e.target.value);
  };

  const { theme, toggleTheme } = useTheme();

  const renderProductsByType = (type: string) => {
    return filteredProducts
      .filter((product) => product.type === type)
      .map((product) => (
        <div key={product.id}>
          <ProductItem
            Remover={() => openModal(product.id)}
            product={product}
            newPrice={product.price}
            openModal={openModal}
          />
        </div>
      ));
  };

  useEffect(() => {
    const total = countProductByType(products);
    setProductTotal(total);
    console.log(total);
  }, [products]);

  const countProductByType = (products: any[]) => {
    return products.reduce((acc, product) => {
      acc[product.type] = (acc[product.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const totalProducts = countProductByType(products);

  return (
    <Container theme={theme}>
      <Title>Controle de Estoque</Title>
      <DivSaldoEBotao>
        <BotaoTheme theme={theme} onClick={toggleTheme}>
          {theme === "light" ? (
            <img src={modoNoturno} alt="light" />
          ) : (
            <img src={modoClaro} alt="dark" />
          )}
        </BotaoTheme>
        <DivCarteira theme={theme}>Saldo: R$ {wallet.toFixed(2)}</DivCarteira>
      </DivSaldoEBotao>
      <ProductForm addProduct={handleAddProduct} />
      <DivFiltros>
        <InputSearch
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Pesquise um produto"
        />
        <Select
          id="type"
          name="type"
          onChange={handleChange}
          value={productType}
        >
          <Option value="">Filtre pelo tipo:</Option>
          <Option value="Comida">Comida</Option>
          <Option value="Bebida">Bebida</Option>
          <Option value="Limpeza">Limpeza</Option>
        </Select>
      </DivFiltros>
      <List theme={theme}>
        <DivCategorias>
          <H3Categorias>
            Comida - {totalProducts["Comida"]} produtos
          </H3Categorias>
          <DivCategorias2>{renderProductsByType("Comida")}</DivCategorias2>
          <H3Categorias>
            Bebida - {totalProducts["Bebida"]} produtos
          </H3Categorias>
          <DivCategorias2>{renderProductsByType("Bebida")}</DivCategorias2>
          <H3Categorias>
            Limpeza - {totalProducts["Limpeza"]} produtos
          </H3Categorias>
          <DivCategorias2>{renderProductsByType("Limpeza")}</DivCategorias2>
        </DivCategorias>
      </List>
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        onConfirmRemove={() =>
          itemToRemove !== null && handleSellProduct(itemToRemove)
        }
        products={products}
        handleQuantityChange={() => handleQuantityChange()}
        quantity={quantity}
        />
    </Container>
  );
};

export default ProductList;
