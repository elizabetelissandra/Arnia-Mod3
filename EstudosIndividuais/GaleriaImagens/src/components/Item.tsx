import { Imagem } from "./styles/FormStyles"

interface ItemProps{
    image: string
    alt: string
}

const Item: React.FC<ItemProps> = ({image, alt}) => {
    return (
        <div className="gallery-item">
           <Imagem src={image} alt={alt} />
        </div>
    )
}

export default Item