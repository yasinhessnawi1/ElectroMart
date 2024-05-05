import { useContext } from 'react';
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
  background: #324a21;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
`;

const TotalAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
  color: #fdfdfd; // Light green from your palette
`;

const CartHeader = styled.h1`
  text-align: center;
  color: #f9faf9; // Dark green from your palette
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc; // Consider a color from your palette if applicable
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
`;

const ItemName = styled.h4`
  font-size: 1.2rem;
  color: #fafafa; // Mid-tone gray, consider adjusting
`;

const ItemPrice = styled.p`
  color: #f8f7f7; // Lighter gray, adjust to fit your palette
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px; // Larger icon for better interaction
  color: #007bff; // Use a color from your palette here

  &:hover {
    color: #0056b3; // Consider a hover state from your palette
  }
`;

const RemoveButton = styled(IconButton)`
  color: #dc3545; // Consider adjusting to a palette color
`;

const BackLink = styled(Link)`
  position: inherit;
  top: 10px;
  left: 10px;
  color: #007bff; // Use a color from your palette here
  font-size: 24px;
`;

const CheckoutButton = styled.button`
  background-color: #258b76; // Aqua background from your palette
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  font-size: 18px;

  &:hover {
    background-color: #6bfff7; // Turquoise on hover from your palette
  }
`;

function CartPage() {
  const { cartItems, addToCart, removeFromCart, updateItemQuantity } =
    useContext(CartContext);

  const handleRemove = (id) => removeFromCart(id);
  const handleIncrease = (product) => addToCart(product);
  const handleDecrease = (product) =>
    updateItemQuantity(product.ID, product.quantity - 1);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <BackLink to='/'>
          <FaArrowLeft />
        </BackLink>
        <p>Your cart is empty.</p>
      </CartContainer>
    );
  }

  return (
    <>
      <Header />
      <CartContainer>
        <BackLink to='/'>
          <FaArrowLeft />
        </BackLink>
        <CartHeader>Your Cart</CartHeader>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemImage
                src={
                  item.image ||
                  process.env.PUBLIC_URL + '/banners/placeholder60.jpg'
                }
                alt={item.name}
              />
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>
                  ${item.price} x {item.quantity}
                </ItemPrice>
              </div>
            </ItemDetails>
            <div>
              <IconButton onClick={() => handleIncrease(item)}>
                <FaPlus />
              </IconButton>
              <IconButton onClick={() => handleDecrease(item)}>
                <FaMinus />
              </IconButton>
              <RemoveButton onClick={() => handleRemove(item.ID)}>
                <FaTrash />
              </RemoveButton>
            </div>
          </CartItem>
        ))}
        <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
        <CheckoutButton onClick={() => alert('Checkout function coming soon')}>
          Checkout
        </CheckoutButton>
      </CartContainer>
      <Footer />
    </>
  );
}

export default CartPage;
