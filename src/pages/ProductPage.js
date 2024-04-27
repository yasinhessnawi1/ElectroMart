import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { fetchProductDetails } from '../hooks/api';
import { CartContext } from '../context/CartContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useParams } from 'react-router-dom';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    min-height: 80vh;
    background-color: #f8f9fa;
`;


const ProductImage = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const ProductInfo = styled.div`
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
    text-align: center;
`;

const ProductName = styled.h1`
    color: #333;
    margin-bottom: 10px;
`;

const ProductPrice = styled.p`
    font-size: 24px;
    color: #28a745;
    font-weight: bold;
`;

const ProductDescription = styled.p`
    color: #666;
    margin-top: 15px;
`;

const ProductDetails = styled.p`
    color: #333;
    font-size: 16px;
    line-height: 1.5;
`;

const AddToCartButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Message = styled.p`
    color: #dc3545;
    font-size: 20px;
`;

// Product Page Component
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  useEffect(() => {
    fetchProductDetails(id)
      .then(data => {
        console.log('Product data:', data); // Check the fetched product data
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(`Error fetching product: ${err.message}`);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ProductContainer><Message>Loading...</Message></ProductContainer>;
  if (error) return <ProductContainer><Message>{error}</Message></ProductContainer>;

  return (
    <>
      <Header />
      <ProductContainer>
        {product && (
          <>
            <ProductImage src={product.image ||process.env.PUBLIC_URL+ "/banners/placeholder300.jpg"} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductDetails>Stock Quantity: {product.stock_quantity}</ProductDetails>
              <ProductDetails>Brand ID: {product.brand_id}</ProductDetails>
              <ProductDetails>Category ID: {product.category_id}</ProductDetails>
              <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
            </ProductInfo>
          </>
        )}
      </ProductContainer>
      <Footer />
    </>
  )
}

export default ProductPage;
