import { useState } from 'react';
import styled from 'styled-components';
import { searchProducts } from '../hooks/api';
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 8px 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ResultItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #f8f9fa;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 16px;
  }

  .price {
    color: #007bff;
    font-weight: bold;
  }
`;

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const searchResults = await searchProducts(searchTerm); // Ensure this matches your API expectation
        setResults(searchResults);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleSearch} // Trigger search on key up
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {results.length > 0 && (
        <ResultsDropdown>
          {results.map((product) => (
            <ResultItem key={product.ID} to={`/product/${product.ID}`}>
              <img
                src={
                  product.image ||
                  process.env.PUBLIC_URL + '/banners/placeholder40.jpg'
                }
                alt={product.name}
              />
              <div>
                <span>{product.name}</span>
                <span className='price'>${product.price.toFixed(2)}</span>
              </div>
            </ResultItem>
          ))}
        </ResultsDropdown>
      )}
    </SearchContainer>
  );
}

export default SearchComponent;
