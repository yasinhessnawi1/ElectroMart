import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Carousel from '../components/Carousel';
import SearchComponent from '../components/SearchComponent';
import Products from '../components/Products';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();  const handleSearch = (results) => {
    setSearchResults(results);  // This sets the search results into state
  };
  navigate('/');
  return (
    <>
      <Header />
      <SearchComponent onSearch={handleSearch} />
      <Carousel />
      <Products results={searchResults} />
      <Footer />
    </>
  );

}

export default HomePage;
