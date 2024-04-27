import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router basename="/ElectroMart">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;


