import { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useParams } from 'react-router-dom';
import {
  fetchProductDetails,
  fetchBrandInfo,
  fetchCategoryInfo,
} from '../hooks/api';
import { CartContext } from '../context/CartContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 80vh;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
`;

const ProductImage = styled.img`
  width: 80%;
  max-width: 500px;
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
  max-width: 600px;
  margin-top: 20px;
  text-align: center;
  animation: ${fadeIn} 1s;
`;

const ProductName = styled.h1`
  color: #324a21; // Dark green from your palette
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  color: #258b76; // Aqua green for vibrant look
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
  background-color: #007bff; // Use a vibrant color from your palette
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: #0056b3; // Darker shade for hover state
  }
`;

const Message = styled.p`
  color: #dc3545; // Red for error messages
  font-size: 20px;
  animation: ${fadeIn} 1s;
`;

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const fetchDetails = async () => {
      try {
        const productDetails = await fetchProductDetails(id);
        const [brand, category] = await Promise.all([
          fetchBrandInfo(productDetails.brand_id),
          fetchCategoryInfo(productDetails.category_id),
        ]);
        setProduct(productDetails);
        setBrandName(brand.name);
        setCategoryName(category.name);
      } catch (err) {
        setError(`Error fetching product details: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading)
    return (
      <ProductContainer>
        <Message>Loading...</Message>
      </ProductContainer>
    );
  if (error)
    return (
      <ProductContainer>
        <Message>{error}</Message>
      </ProductContainer>
    );

  return (
    <>
      <Header />
      <ProductContainer>
        {product && (
          <>
            <ProductImage
              src={
                product.image ||
                process.env.PUBLIC_URL + '/banners/placeholder300.jpg'
              }
              alt={product.name}
            />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductDetails>
                Stock Quantity: {product.stock_quantity}
              </ProductDetails>
              <ProductDetails>Brand: {brandName}</ProductDetails>
              <ProductDetails>Category: {categoryName}</ProductDetails>
              <AddToCartButton onClick={() => addToCart(product)}>
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </>
        )}
      </ProductContainer>
      <Footer />
    </>
  );
}

export default ProductPage;
