import { useState } from "react";
import "./App.css";
import Galeria from "./components/Galeria";
import FormLink from "./components/Form/form";
import { H1, Main } from "./components/styles/FormStyles";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  const [galeria, setGaleria] = useState<string[]>([]);

  const handleAddImage = (image: string) => {
    if (!galeria.includes(image)) {
      setGaleria([...galeria, image]);
    } else {
      alert("Imagem ja existente");
    }
  };

  return (
    <>
      <GlobalStyles/>
        <Main>
          <H1>Galeria de imagens</H1>
          <FormLink addImage={handleAddImage} />
          <Galeria images={galeria} />
        </Main>
    </>
  );
}

export default App;
