import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter, Routes, Navigate } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import CartProvider from "./store/CartProvider";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AuthProvider from "./store/AuthProvider";
// import ProductReviews from "./pages/ProductReviews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='/home' element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              {/* <Route path='/store/:id' element={<ProductReviews />} /> */}
              <Route path='/contact' element={<Contact />} />
            </Route>
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
