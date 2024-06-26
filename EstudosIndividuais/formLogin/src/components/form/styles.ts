import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;


`;

const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;

    div {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: black;
    font-size: 20px;


  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }
  `

  const Button = styled.button`
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  `
export { DivForm, Form, Button}
