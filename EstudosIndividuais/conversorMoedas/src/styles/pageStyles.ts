// src/styles/CurrencyConverterStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const Input = styled.input`
  width: 150px;
  padding: 5px;
`;

export const Result = styled.div`
  font-size: 1.5em;
  margin-top: 20px;
`;
