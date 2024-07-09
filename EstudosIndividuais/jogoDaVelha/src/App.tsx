import AppStyled from "./App";
import JogoDaVelha from "./components/JogoDaVelha";
import { LogicaProvider } from "./context/logicaProvider";

function App() {
  return (
    <>
      <LogicaProvider>
        <AppStyled>
          <h1>Jogo da velha</h1>
          <JogoDaVelha />
        </AppStyled>
      </LogicaProvider>
    </>
  );
}

export default App;
