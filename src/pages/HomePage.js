import { useState } from 'react';
import Header from '../components/layout/Header';
import Carousel from '../components/Carousel';
import SearchComponent from '../components/SearchComponent';
import Products from '../components/Products';
import Footer from '../components/layout/Footer';
import { PageContainers } from '../styles/StyledComponents';

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results); // Sets the search results into state
  };

  return (
    <>
      <Header />
      <PageContainers>
        <SearchComponent onSearch={handleSearch} />
        <Carousel />
        <Products results={searchResults} />
      </PageContainers>
      <Footer />
    </>
  );
}

export default HomePage;
