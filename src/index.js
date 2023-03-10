import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import CartProvider from "./store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  </React.StrictMode>
);
