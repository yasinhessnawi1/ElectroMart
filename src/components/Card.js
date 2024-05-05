import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer } from './commn/Button'; // Corrected the path based on previous input
import { CartContext } from '../context/CartContext';
import PropTypes from 'prop-types';

const Card = styled.div`
  min-width: 300px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  align-self: center;
  border-radius: 10px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: linear-gradient(
    145deg,
    #010101,
    #258b76
  ); // Gradient from Black to Aqua
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; // Fixed height to maintain uniformity across cards
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
  background-color: #ffffff; // Plain white background for the information section
`;

const ProductName = styled.h5`
  margin: 5px 0;
  color: #010101; // Black text for name
`;

const ProductPrice = styled.p`
  color: #74832a; // Light green from your palette for price
`;

const StyledButton = styled(Button)`
  background-color: #6bff77; // Turquoise variant from your palette
  color: #ffffff; // White text
  &:hover {
    background-color: #324a21; // Dark green for hover
  }
`;

function ProductCard({ product }) {
  console.log(product.image);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // Optionally, show feedback here
  };

  return (
    <Link
      to={`/product/${product.ID}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card>
        <ProductImage
          src={
            product.image ||
            process.env.PUBLIC_URL + '/banners/placeholder150.jpg'
          }
          style={{ maxHeight: '150px', maxWidth: '300px' }}
          alt={product.name}
        />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </ProductInfo>
        <ButtonContainer>
          <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>
        </ButtonContainer>
      </Card>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }),
};

export default ProductCard;
