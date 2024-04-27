import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/ElectroMart" element={<HomePage />} exact />
        <Route path="/ElectroMart/product/:id" element={<ProductPage />} />
        <Route path="/ElectroMart/cart" element={<CartPage />} />
      </Routes>
    </Router>
  </CartProvider>
</UserProvider>
)
  ;
}

export default App;
