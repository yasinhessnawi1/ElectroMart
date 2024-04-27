import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Carousel from '../components/Carousel';
import SearchComponent from '../components/SearchComponent';
import Products from '../components/Products';
import Footer from '../components/layout/Footer';

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);  // This sets the search results into state
  };

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
