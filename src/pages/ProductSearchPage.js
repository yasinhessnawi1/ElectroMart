function ProductSearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <SearchContainer>
        <SearchComponent onSearch={setSearchResults} />
      </SearchContainer>
      <SearchResultContainer>
        {searchResults.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image || process.env.PUBLIC_URL + "/banners/placeholder40.jpg"} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </SearchResultContainer>
    </>
  );
}

export default ProductSearchPage;