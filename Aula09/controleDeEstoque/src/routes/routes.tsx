import { BrowserRouter, Route, Routes as RoutesRouter } from "react-router-dom";
import Sobre from "../components/Sobre";
import Home from "../components/Home.tsx";
import ProductList from "../components/ProductList.tsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesRouter>
        <Route element={<Home />} path="/home" />
        <Route element={<ProductList />} path="/app" />
        <Route element={<Sobre />} path="/sobre" />
      </RoutesRouter>
    </BrowserRouter>
  );
};

export default Routes;
