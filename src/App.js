import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CartContext from "./store/cart-context";

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartCtx.showCart && <Cart hideCartHandler={cartCtx.hideCartHandler} />}
      <Header showCartHandler={cartCtx.showCartHandler} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
