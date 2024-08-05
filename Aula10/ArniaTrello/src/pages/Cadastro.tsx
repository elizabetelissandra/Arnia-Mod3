import { useState } from "react";
import { validationSchema } from "../schema/validationSchema";
import {
  DivCadastro,
  H1,
  Form,
  P,
  Input,
  ButtonCadastro,
  H2,
} from "../styles/CadastroStyles";

import axiosInstance from "../api/axiosConfig";

const Cadastro = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const mathRandom = Math.random().toString(36).substring(2);
      await validationSchema.validate(formState);
      const response = {
        id: mathRandom,
        name: formState.name,
        email: formState.email,
        password: formState.password,
      };
      await axiosInstance.post("/user", response)
      
      
      if (response) {
        alert("Usário criado com sucesso");
        console.log(response);
        
      }

      
    } catch (error) {
      console.log("Erro ao enviar os dados", error);
    }
  };
  return (
    <>
      <DivCadastro>
        <H1>Arnia Trello</H1>
        <H2>Cadastro</H2>
        <P>Insira suas informações abaixo</P>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome Completo"
            value={formState.name}
            name="name"
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={formState.email}
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={formState.password}
            name="password"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Confirme sua senha"
            value={formState.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
        </Form>
      </DivCadastro>
    </>
  );
};

export default Cadastro;
function mathRandom() {
  throw new Error("Function not implemented.");
}

