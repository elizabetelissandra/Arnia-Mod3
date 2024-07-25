import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Product } from "../types/Products";
import {
  BotaoTipos,
  DivCategorias,
  DivHeader,
  H2Header,
  H3Cat,
  ImgCafes,
  Input,
} from "../styles/CatalogoStyles";
import CardProdutos from "../components/CardProdutos";
import { H3Category } from "../styles/CardProdutosStyles";

const Catalogo = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tradicionais");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      console.log(data);
      setProducts(data.cafes);
    };
    fetchData();
  }, []);

  const filteredProducts = products.find((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCafesByCategory = (category: string) => {
    const filteredCafes = products.filter(
      (product) => product.category === category
    );
    return filteredCafes;
  };



  return (
    <>
      <DivHeader>
        <H2Header>Encontre o café perfeito para qualquer hora do dia</H2Header>
        <Input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ImgCafes src="../src/img/GraosCafe.png" alt="Graõs de Café" />
      </DivHeader>

      <Card />

      <H3Cat>Nossos cafés</H3Cat>
      <DivCategorias>
        <BotaoTipos onClick={() => setSelectedCategory("Tradicionais")}>Tradicionais</BotaoTipos>
        <BotaoTipos onClick={() => setSelectedCategory("Doces")}>Doces</BotaoTipos>
        <BotaoTipos onClick={() => setSelectedCategory("Especiais")}>Especiais</BotaoTipos>
      </DivCategorias>

      <H3Category>{selectedCategory}</H3Category>
      <CardProdutos
        renderCafesByCategory={() => renderCafesByCategory(selectedCategory)}
      />
    </>
  );
};

export default Catalogo;
