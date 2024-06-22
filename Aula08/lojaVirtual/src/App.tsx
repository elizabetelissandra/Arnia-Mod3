import CartPage from "./pages/pag2";
import ProductPage from "./pages/pag1";
import { useState } from "react";
import CheckoutPage from "./pages/pag3";



const App = () => {
  const [page, setPage] = useState("home")
  return( 
  <div>
    {page === "home" ? <ProductPage goToCart={() => setPage("cartPage")} /> : null}
    {page === "cartPage" ? <CartPage goToCheckout={() => setPage("checkout")} /> : null}
    {page === "checkout" ? <CheckoutPage confirmPurchase={() => setPage("home")} /> : null}
  </div>
)};

export default App;
