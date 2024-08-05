import React, {  useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import {
  ButtonCadastro,
  ButtonLogin,
  DivForm,
  DivLogin,
  Form,
  H1,
} from "../styles/LoginStyles";
import { validationSchemaLogin } from "../schema/validationSchema";
import  axiosInstance  from "../api/axiosConfig";

const Login: React.FC = () => {
  const [formLoginState, setFormLoginState] = useState({
    email: "",
    password: "",
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormLoginState({
      ...formLoginState,
      [name]: value,
    });
  };
  
  const handleLoginSubmit = async () => {
    try {

     
      await validationSchemaLogin.validate(formLoginState);
        const response = await axiosInstance.post("/user/login", {
          email: formLoginState.email,
          password: formLoginState.password,
        });
        console.log("Conteudo response:", response);
        axiosInstance.defaults.headers.common.Authorization = `${response.data.token}`;
        localStorage.setItem("token", JSON.stringify(response.data.token));
        
        
      
      
      // window.location.href = "/trello";
      
     } catch (error) {
      console.log("Erro ao enviar os dados", error);
    }
  };

  return (
    <DivLogin>
      <DivForm>
        <H1>Arnia Trello</H1>

        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                color="warning"
                onChange={(e) => {
                  handleChange({ target: e.target }); // Adjusted to pass an event object
                  field.onChange(e);
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                color="warning"
                onChange={(e) => {
                  handleChange({ target: e.target }); // Adjusted to pass an event object
                  field.onChange(e);
                }}
              />
            )}
          />
          <ButtonLogin type="submit">Enviar</ButtonLogin>
        </Form>
        <ButtonCadastro to="/cadastro">Cadastre-se</ButtonCadastro>
      </DivForm>
    </DivLogin>
  );
};

export default Login;
