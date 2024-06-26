import { useState } from "react";
import { Form, DivForm, Button } from "./styles";

// useState: Utilizamos useState para armazenar os valores dos campos do formulário (username e password).

// handleChange: Atualiza o estado do formulário conforme o usuário digita nos campos.

// handleSubmit: Trata o envio do formulário e impede o comportamento padrão (recarregar a página), exibindo um alerta com os dados inseridos.

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Email: ${formData.email}, Senha: ${formData.password}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <DivForm>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button type="submit">Logar</Button>
      </DivForm>
    </Form>
  );
};

export default LoginForm;
