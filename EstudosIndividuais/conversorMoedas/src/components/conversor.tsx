import { useEffect, useState } from "react";
import { Container, Result, Title } from "../styles/pageStyles";
import ConversorInput from "./conversorInput";

const Conversor = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BRL");
  const [amount, setAmount] = useState<number>(1);
  const [convert, setConvert] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`);
        const currencyArray = Object.keys(await response.json());
        setCurrencies(currencyArray)
  

  return (
    <Container>
      <Title>Conversor de Moedas</Title>
      <ConversorInput
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
        onAmountChange={(e) => setAmount(e.target.value)}/>
      <ConversorInput
      currencies={currencies}
      selectedCurrency={toCurrency}
      onCurrencyChange={(e) => setToCurrency(e.target.value)}
      onAmountChange={(e) => setAmount(e.target.value)}
      amount={convert}
      />
      <Result>{amount} {fromCurrency} = {convert} {toCurrency}</Result>
    </Container>
  )
};
export default Conversor;