import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";
import {
  Container,
  DivList,
  InputSearch,
  List,
  Select,
  Title,
  Option,
  DivFiltros,
  BotaoTheme,
} from "../styles/ProductListStyles";
import Modal from "./Modal";
import { useTheme } from "../context/ThemeContext";

import modoNoturno from "../img/modo-noturno.png";
import sol from "../img/sol.png";

const ProductList = () => {
  const [products, setProducts] = useState<
    {
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
  const [itemToRemove, setItemToRemove] = useState(null);
  const [productType, setProductType] = useState("");

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
    setProducts([...products, product]);
  };

  useEffect(() => {
    fetch("../../data.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Dados recebidos:", res);
        setProducts(res.products);
      });
  }, []);

  const openModal = (item: any) => {
    setItemToRemove(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveProduct = (productId: any) => {
    openModal(productId);
    setProducts(products.filter((product) => product === productId));
    closeModal();
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (product.type === productType || productType === "")
  );

  const handleChange = (e: any) => {
    setProductType(e.target.value);
  };

  const { theme, toggleTheme } = useTheme();

  const toggleImg = (theme: string) => {
    
    if (theme === "light") {
      return (
        <img
        src= {modoNoturno}
        alt= "light"
        />
      )
    } else {
      return (
        <img
        src= {sol}
        alt= "dark"
        />
      );
    }
  }

  return (
    <Container theme={theme}>
      <Title>Controle de Estoque</Title>
      <BotaoTheme theme={theme} onClick={toggleTheme}>{toggleImg(theme)}
      </BotaoTheme>
      <ProductForm addProduct={handleAddProduct} />
      <DivList theme={theme}>
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
          {filteredProducts.map((product, index) => (
            <ProductItem
              Remover={() => handleRemoveProduct(index)}
              product={product}
              openModal={(item: any) => openModal(item)}
              newPrice={product.price}
            />
          ))}
        </List>
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          onConfirmRemove={() => handleRemoveProduct}
        />
      </DivList>
    </Container>
  );
};

export default ProductList;
