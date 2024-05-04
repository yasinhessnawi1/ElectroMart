import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import Skeleton from 'react-loading-skeleton';
import {
  fetchBrandInfo,
  fetchBrandItems,
  fetchCategoryInfo,
  fetchCategoryItems,
} from '../hooks/api';

const CategoryContainer = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
  // Black to a dark green matching your palette
  min-height: 100vh; // Full view height
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; // Improved for better responsiveness
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
  justify-content: space-around; // Enhance responsiveness
  gap: 20px; // Space between cards
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #fafafa;
  margin: 20px 0;
`;

function SearchPage() {
  const { type, id } = useParams();
  const [info, setInfo] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let infoData = {},
          itemsData = [];
        if (type === 'category') {
          [infoData, itemsData] = await Promise.all([
            fetchCategoryInfo(id),
            fetchCategoryItems(id),
          ]);
        } else if (type === 'brand') {
          [infoData, itemsData] = await Promise.all([
            fetchBrandInfo(id),
            fetchBrandItems(id),
          ]);
        }
        setInfo(infoData);
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return (
    <>
      <Header />
      <CategoryContainer>
        <CategoryHeader>
          <CategoryTitle>{info.name || 'Loading...'}</CategoryTitle>
          <CategoryDescription>
            {info.description || 'No description available'}
          </CategoryDescription>
        </CategoryHeader>
        <SectionTitle>Products</SectionTitle>
        <ItemsContainer>
          {loading ? (
            <CardGroup>
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} height={300} />
              ))}
            </CardGroup>
          ) : (
            items.map((product) => <Card key={product.ID} product={product} />)
          )}
        </ItemsContainer>
      </CategoryContainer>
      <Footer />
    </>
  );
}

export default SearchPage;
