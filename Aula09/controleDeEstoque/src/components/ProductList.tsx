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
import modoClaro from "../img/sol.png"
import React from "react";

const ProductList = () => {
  const [products, setProducts] = useState<
    {
      identificadorCor: any;
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

  const coresIdentificacao: Record<string, string> = {
    food: "#FFD700",
    drink: "#007BFF",
    cleaningProduct: "#FF5733",
  };

  useEffect(() => {
    fetch("../../data.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const produtosPorTipo = res.products.reduce((acc, product) => {
          const tipo = product.type;
          if (!acc[tipo]) {
            acc[tipo] = [];
          }
          acc[tipo].push({
            ...product,
            identificadorCor: coresIdentificacao[product.type], // Certifique-se de que esta linha está definindo a cor corretamente
          });
          return acc;
        }, {});
  
        setProducts(produtosPorTipo);
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

  return (
    <Container theme={theme}>
      <Title>Controle de Estoque</Title>
      <BotaoTheme theme={theme} onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={modoNoturno} alt="light" /> 
        ) : (
          <img src={modoClaro} alt="dark" />
        )}
      </BotaoTheme>
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
        {Object.keys(products).map((tipo) => (
          <React.Fragment key={tipo}>
            <h3>{tipo}</h3>
            {filteredProducts.map((product, index) => (
              <div style={{ marginBottom: "20px" }}>
                <ProductItem
                  style={{ backgroundColor: product.identificadorCor }}
                  Remover={() => handleRemoveProduct(index)}
                  product={product}
                  openModal={(item: any) => openModal(item)}
                  newPrice={product.price}
                />
              </div>
            ))}
            </React.Fragment>
        ))}
        </List>
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          onConfirmRemove={() => handleRemoveProduct}
        />
    </Container>
  );
};

export default ProductList;
