import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SingUpPage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import EditProductPage from './pages/EditProductPage';
import EditCategoryPage from './pages/EditCategoryPage';
import EditBrandPage from './pages/EditBrandPage';

function App() {
  React.useEffect(() => {
    document.title = 'ElectroMart';
  });
  return (
    <UserProvider>
      <CartProvider>
        <Router basename='/ElectroMart'>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/search/:type/:id' element={<SearchPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/product/edit' element={<EditProductPage />} />
            <Route path='/category/edit' element={<EditCategoryPage />} />
            <Route path='/brand/edit' element={<EditBrandPage />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
