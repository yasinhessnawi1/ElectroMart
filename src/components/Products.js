import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Card from './Card';
import { fetchCategoryInfo, fetchProductsDetails } from '../hooks/api';
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

// eslint-disable-next-line react/prop-types
function Products({ results }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProductsDetails();
        const productsWithCategory = await Promise.all(
          products.map(async (product) => {
            const category = await fetchCategoryInfo(product.category_id);
            return { ...product, category };
          }),
        );
        setData(productsWithCategory);
        setFilter(productsWithCategory);
      } catch (err) {
        console.error('Error fetching products:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProduct = (categoryName) => {
    const filteredData = data.filter(
      (product) => product.category && product.category.name === categoryName,
    );
    setFilter(filteredData);
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
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
        <FilterButton onClick={() => filterProduct('Appliances')}>
          Appliances
        </FilterButton>
        <FilterButton onClick={() => filterProduct('TV & Home Theater')}>
          TV & Home Theater
        </FilterButton>
        <FilterButton onClick={() => filterProduct('Computers & Tablets')}>
          Computers & Tablets
        </FilterButton>
        <FilterButton onClick={() => filterProduct('Headphones and speaker')}>
          Headphones and speaker
        </FilterButton>
        <FilterButton onClick={() => filterProduct('Phones')}>
          Phones
        </FilterButton>
        <FilterButton onClick={() => filterProduct('Video Games')}>
          Video Games
        </FilterButton>
        <FilterButton onClick={() => filterProduct('Cameras')}>
          Cameras
        </FilterButton>
      </FilterButtonContainer>
      <CardGroup>
        {loading ? (
          <Loading />
        ) : (
          filter.map((product) => <Card key={product.ID} product={product} />)
        )}
      </CardGroup>
    </div>
  );
}

export default Products;
