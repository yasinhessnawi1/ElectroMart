import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Card from './Card';
import { fetchProductsDetails } from '../hooks/api';
import FilterButton from './commn/FilterButton';
import styled from 'styled-components';

const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 0 10px;
`;

const FilterButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap; // Allow the container to wrap items
    gap: 5px;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 20px; // Add some margin for spacing from content below

    @media (max-width: 768px) {
        justify-content: center; // Center align on smaller screens
        gap: 10px; // Increase gap for better touch targets on smaller screens
    }
`;


function Products({ results }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (!results || results.length === 0) {
      setLoading(true);
      fetchProductsDetails()
        .then((data) => {
          setData(data);
          setFilter(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Error fetching products:', err.message);
          setLoading(false);
        });
    } else {
      setData(results);
      setFilter(results);
      setLoading(false);
    }
  }, [results]);

  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };

  const Loading = () => (
    <CardGroup>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n}>
          <Skeleton height={300} />
        </div>
      ))}
    </CardGroup>
  );

  return (
    <div>
      <FilterButtonContainer>
        <FilterButton onClick={() => setFilter(data)}>All</FilterButton>
        <FilterButton onClick={() => filterProduct('Appliances')}>Appliances</FilterButton>
        <FilterButton onClick={() => filterProduct('TV & Home Theater')}>TV & Home Theater</FilterButton>
        <FilterButton onClick={() => filterProduct('Computers & Tablets')}>Computers & Tablets</FilterButton>
        <FilterButton onClick={() => filterProduct('Headphones and speaker')}>Headphones and speaker</FilterButton>
        <FilterButton onClick={() => filterProduct('Phones')}>Phones</FilterButton>
        <FilterButton onClick={() => filterProduct('Video Games')}>Video Games</FilterButton>
        <FilterButton onClick={() => filterProduct('Cameras')}>Cameras</FilterButton>
      </FilterButtonContainer>
      <CardGroup>
        {loading ? <Loading /> : filter.map((product) => (
          <Card key={product.ID} product={product} />
        ))}
      </CardGroup>
    </div>
  );
}

export default Products;
