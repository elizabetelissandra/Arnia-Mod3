import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;


h1{
color: #40352F
}

input{
background: #F2DEC4;
border: none;
border-radius: 5px;
}



input {
  padding: 10px;
  font-size: 16px;
  width: 70%;
  outline: none;
}

button {
  padding: 10px;
  font-size: 16px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  background: #FEC5C0;
  margin-bottom: 10px;
  text-align: left;
}

`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

`

const DivLista = styled.div`
  
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
font-size: 20px;
color: black;
border: none;
border-radius: 5px;
`

const ButtonAdd = styled.button`
  padding: 10px;
  font-size: 16px;
  background: #F27289;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  

  &:hover {
    background: #8BCAD9;
  }
`

const ButtonDelete = styled.button`
  padding: 10px;
  font-size: 16px;
  background: #ff5c5c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ff0000;
  }
`

const ImagemCaderneta = styled.img`
  width: 50px;
  height: 50px;
`

const DivTodoItem = styled.div`
  display: flex;
  flex-direction: column; 
  background: #E8B4A5;
  padding: 10px;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 5px;
`

export { Container, ButtonDelete, DivLista, ImagemCaderneta, DivTodoItem, ButtonAdd, Form, H1 }