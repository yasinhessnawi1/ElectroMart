import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const CartContainer = styled.div`
    width: 80%;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative; // Positioning context for absolute elements inside
`;
const TotalAmount = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: right;
    margin-top: 20px;
`;


const CartHeader = styled.h1`
    text-align: center;
    color: #333;
`;

const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
`;

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
`;

const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
`;

const ItemName = styled.h4`
    font-size: 1.2rem;
    color: #555;
`;

const ItemPrice = styled.p`
    color: #666;
`;

const IconButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px; // Bigger icon for better interaction
    color: #007bff;

    &:hover {
        color: #0056b3;
    }
`;

const RemoveButton = styled(IconButton)`
    color: red; // Red color specifically for remove action
`;

const BackLink = styled(Link)`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #007bff;
    font-size: 24px;
`;

const CheckoutButton = styled.button`
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    font-size: 18px;

    &:hover {
        background-color: #218838;
    }
`;

function CartPage() {
  const { cartItems, addToCart, removeFromCart , updateItemQuantity} = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (product) => {
      updateItemQuantity(product.ID, product.quantity - 1);
  }
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) return (
    <CartContainer>
      <BackLink to="/"><FaArrowLeft /></BackLink>
      <p>Your cart is empty.</p>
    </CartContainer>
  );

  return (
    <>
      <Header />
      <CartContainer>
        <BackLink to="/"><FaArrowLeft /></BackLink>
        <CartHeader>Your Cart</CartHeader>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemImage src={item.image || process.env.PUBLIC_URL + "/banners/placeholder60.jpg"} alt={item.name} />
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price} x {item.quantity}</ItemPrice>
              </div>
            </ItemDetails>
            <div>
              <div>
                <IconButton onClick={() => handleIncrease(item)}><FaPlus /></IconButton>
                <IconButton onClick={() => handleDecrease(item)}><FaMinus /></IconButton>
                <RemoveButton onClick={() => handleRemove(item.ID)}><FaTrash /></RemoveButton>
              </div>
            </div>
          </CartItem>
        ))}
        <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
        <CheckoutButton onClick={() => alert("function coming soon ")}>Checkout</CheckoutButton>
      </CartContainer>
      <Footer />
    </>
  );
}

export default CartPage;
