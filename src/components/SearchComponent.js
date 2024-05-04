import styled from 'styled-components';
import { searchProducts } from '../hooks/api';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash'; // Import debounce from lodash for optimized searching
import { useState, useEffect, useRef } from 'react';

// Styled components enhanced with your color palette
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 20px;
  color: #ffffff; // Using white text consistently
`;

const SearchInput = styled.input`
  padding: 8px 15px;
  width: 100%;
  border: 1px solid #ccc; // Soft grey border, consider adjusting if not in your palette
  border-radius: 5px;
  margin-right: 10px;
  background-color: #010101; // Black background from your palette
  color: #ffffff; // White text for high contrast
`;

const SearchButton = styled.button`
  padding: 8px 15px;
  background-color: #258b76; // Aqua background from your palette
  color: #ffffff; // White text
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6bfff7; // Turquoise on hover from your palette
  }
`;

const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: white; // Consider using a light color from your palette if applicable
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ResultItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #010101; // Soft grey, adjust if needed
  text-decoration: none;
  color: #010101; // Black text from your palette
  background-color: #74832a;
  &:hover {
    background-color: #324a21; // Very light grey, ensure it fits your palette
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
    color: #fafb63; // Yellow for prices from your palette
    font-weight: bold;
  }
`;

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchContainerRef = useRef(null); // Ref for the search container

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const searchResults = await searchProducts(searchTerm);
        setResults(searchResults);
        setIsDropdownVisible(true); // Show the dropdown
      } catch (error) {
        console.error(error);
        setResults([]);
        setIsDropdownVisible(false);
      }
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setIsDropdownVisible(false); // Hide the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer ref={searchContainerRef}>
      <SearchInput
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        aria-label='Search Products'
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {results.length > 0 && isDropdownVisible && (
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
                <span className='price'>${product.price}</span>
              </div>
            </ResultItem>
          ))}
        </ResultsDropdown>
      )}
    </SearchContainer>
  );
}

export default SearchComponent;
