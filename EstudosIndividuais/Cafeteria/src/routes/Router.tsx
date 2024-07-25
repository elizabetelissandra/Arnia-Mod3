import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catálogo from "../pages/Catálogo";
import ProdutoCompra from "../pages/ProdutoCompra";
const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catálogo />} />
        <Route path="/produto/:id" element={<ProdutoCompra />}/>
      </Routes>
    </Router>
  );
};

export default Rotas;
