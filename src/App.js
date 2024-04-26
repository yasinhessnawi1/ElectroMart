import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import {NavLink, Route, Routes} from 'react-router-dom';
import Cart from './Cart';

function App() {
  return (
    <>
      <Navbar />
        <NavLink to="/cart">Cart</NavLink>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" component={Cart} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
