import { useState } from "react";
import { DivForm, Form } from "../styles/FormStyles";

interface FormLinkProps {
  addImage: (image: string) => void;
}

const FormLink = ({ addImage }: FormLinkProps) => {
  const [image, setImage] = useState<string>("");

  const handleAddImage = () => {
    addImage(image);
    setImage("")
  }

    const handleImageChange = (e: any): void => {
        setImage(e.target.value);
    };

      return (
        <DivForm>
          <Form>
            <label>
              Imagem:
              <input
                type="text"
                name="image"
                required
                onChange={handleImageChange}
                value={image}
                placeholder="Mande um link de uma imagem"
              />
            </label>
            <button onClick={handleAddImage} type="submit">
              Cadastrar
            </button>
          </Form>
        </DivForm>
      );
    }

export default FormLink;
