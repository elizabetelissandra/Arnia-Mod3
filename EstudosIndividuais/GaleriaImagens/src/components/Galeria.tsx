import Item from "./Item";
import { DivGaleria } from "./styles/FormStyles";

interface GaleriaProps {
  images: string[];
}

const Galeria: React.FC<GaleriaProps> = ({images}) => {
  return (
    <DivGaleria>
        {images.map((image, index) => (
           <Item image={image} alt={`Imagem ${index + 1}`}/> 
        ))}
    </DivGaleria>
  );
};

export default Galeria;
