import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Product() {
  const { id } = useParams(); // This assumes your route has a parameter "/product/:id"
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://api.example.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return <div>Loading...</div>; // Replace with a better loading state or skeleton as needed.
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='product-detail'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>In Stock:</strong> {product.stock_quantity}
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
