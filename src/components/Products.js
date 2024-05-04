import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { fetchCategoryInfo, fetchProductsDetails } from '../hooks/api';
import FilterButton from './commn/FilterButton';
import Skeleton from 'react-loading-skeleton';

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
  background: linear-gradient(
    145deg,
    #010101,
    #324a21
  ); // Gradient background from your palette

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

// Customize FilterButton styled component here, assuming it accepts a styled prop for color
const StyledFilterButton = styled(FilterButton)`
  background-color: #258b76; // Aqua from your palette
  color: #ffffff; // White text
  &:hover {
    background-color: #74832a; // Light green for hover from your palette
  }
`;

// eslint-disable-next-line react/prop-types
function Products({ results }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line react/prop-types
      if (!results || results.length === 0) {
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
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        setData(results);
        setFilter(results);
      }
      setLoading(false);
    };

    fetchData();
  }, [results]);

  const filterProduct = (categoryName) => {
    const filteredData = data.filter(
      (product) => product.category && product.category.name === categoryName,
    );
    setFilter(filteredData);
  };

  const Loading = () => (
    <CardGroup>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} height={300} />
      ))}
    </CardGroup>
  );

  return (
    <div>
      <FilterButtonContainer>
        <StyledFilterButton onClick={() => setFilter(data)}>
          All
        </StyledFilterButton>
        {[
          'Appliances',
          'TV & Home Theater',
          'Computers & Tablets',
          'Headphones and speaker',
          'Phones',
          'Video Games',
          'Cameras',
        ].map((category) => (
          <StyledFilterButton
            key={category}
            onClick={() => filterProduct(category)}
          >
            {category}
          </StyledFilterButton>
        ))}
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
