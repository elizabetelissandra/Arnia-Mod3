import './App.css'
import card from './components/card';
import cardDisplay from './components/cardDisplay';

const App = () => {
  return (
    <>
      {cardDisplay(card)}
    </>
  );
};



export default App


