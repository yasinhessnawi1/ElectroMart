import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer } from './commn/Button';
import { CartContext } from '../context/CartContext';


const Card = styled.div`
    min-width: 300px;
    margin: 10px; // Keep margin constant to avoid layout shifts
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    align-self: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth transition for hover
    &:hover {
        transform: translateY(-5px) scale(1.03); // Lift and slightly enlarge the card
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Enhance shadow for better visual effect
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProductInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ProductName = styled.h5`
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; // Prevent long names from breaking layout
`;

const ProductPrice = styled.p`
    color: #007bff;
`;

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };
  return (
    <Link to={`/product/${product.ID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <ProductImage src={product.image || process.env.PUBLIC_URL + "/banners/placeholder150.jpg"} alt={product.name} />
        <ProductInfo>
          <ProductName>   {product.name} </ProductName>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </ProductInfo>
        <ButtonContainer>
          <Button className="btn btn-primary" name={product.ID} onClick={handleAddToCart}>Add to cart</Button>
        </ButtonContainer>
      </Card>
    </Link>
  );
}

export default ProductCard;