import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  fetchCategoryItems,
  fetchCategoryInfo,
  fetchBrandInfo,
  fetchBrandItems,
} from '../hooks/api';
import Card from '../components/Card';
import Skeleton from 'react-loading-skeleton';

const CategoryContainer = styled.div`
  padding: 20px;
  background: #f5f5f5; // Subtle background color
  min-height: 100vh; // Full view height
`;
const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px;
`;

const CategoryHeader = styled.div`
  padding: 20px;
  background: white; // Clean white background
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  border-radius: 8px; // Rounded corners
`;

const CategoryTitle = styled.h2`
  margin: 0;
  color: #333; // Dark grey for contrast
  font-size: 24px; // Larger font size for visibility
`;

const CategoryDescription = styled.p`
  color: #666; // Lighter grey for the description
  font-size: 16px; // Readable text size
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Space items evenly
  gap: 20px; // Space between cards
`;

// Adding a title to the ItemsContainer for context
const SectionTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 20px 0;
`;

function SearchPage() {
  const { type, id } = useParams();
  const [info, setInfo] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let infoData = {},
        itemsData = [];
      try {
        setLoading(true);
        if (type === 'category') {
          infoData = await fetchCategoryInfo(id);
          itemsData = await fetchCategoryItems(id);
        } else if (type === 'brand') {
          infoData = await fetchBrandInfo(id);
          itemsData = await fetchBrandItems(id);
        }
        setLoading(false);
        setInfo(infoData);
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id, type]);

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
    <>
      <Header />
      <CategoryContainer>
        <CategoryHeader>
          <CategoryTitle>{info.name}</CategoryTitle>
          <CategoryDescription>{info.description}</CategoryDescription>
        </CategoryHeader>
        <SectionTitle>Products</SectionTitle>
        <ItemsContainer>
          <CardGroup>
            {loading ? (
              <Loading />
            ) : (
              items.map((product) => (
                <Card key={product.ID} product={product} />
              ))
            )}
          </CardGroup>
        </ItemsContainer>
      </CategoryContainer>
      <Footer />
    </>
  );
}

export default SearchPage;
