import { Input, InputContainer, Select } from "../styles/pageStyles";

interface CurrencyInputProps {
  currencies: string[];
  amount: number;
  onAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCurrency: string;
  onCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ConversorInput: React.FC<CurrencyInputProps> = ({
  currencies,
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <div>
      <InputContainer>
        <Input type="number" value={amount} onChange={onAmountChange} />
        <Select value={selectedCurrency} onChange={onCurrencyChange}>
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </InputContainer>
    </div>
  );
};

export default ConversorInput;
